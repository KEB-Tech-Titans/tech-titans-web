import React, { useState, useEffect } from 'react';
import { fetchDefectCount, fetchTotalDevices } from '../../api/api';
import { damageDataType, lineChartDataType, overallDefectRateDataType } from '../../types/statistics';
import DefectRateForDate from '../../components/Statistics/DefectRateForDate';
import DevicesByGrade from '../../components/Statistics/DevicesByGrade';
import StatisticsHeader from '../../components/Statistics/StatisticsHeader';
import OverallDefectRateProgressBar from '../../components/Statistics/OverallDefectRateProgressBar';

const StatisticsPage: React.FC = () => {
  const [screenDamageData, setScreenDamageData] = useState<damageDataType[]>([]);
  const [totalDevices, setTotalDevices] = useState<number>(0);
  const [lineChartData, setLineChartData] = useState<lineChartDataType[]>([]);
  const [overallDefectRateData, setOverallDefectRateData] = useState<overallDefectRateDataType[]>([]);
  const [totalDefects, setTotalDefects] = useState<number>(0);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    fetchData(today);
  }, []);

  const fetchData = async (date: string) => {
    try {
      const total = await fetchTotalDevices();
      const oilCount = await fetchDefectCount('OIL', date);
      const scratchCount = await fetchDefectCount('SCRATCH', date);
      const stainCount = await fetchDefectCount('STAIN', date);

      const totalDefects = oilCount + scratchCount + stainCount;
      const overallDefectRate = (totalDefects / total) * 100;

      const transformedData = {
        date,
        oil: oilCount,
        scratch: scratchCount,
        stain: stainCount,
        defectRate: overallDefectRate,
      };

      setScreenDamageData([
        { name: 'Oil', value: oilCount },
        { name: 'Scratch', value: scratchCount },
        { name: 'Stain', value: stainCount },
      ]);

      setTotalDevices(total);
      setTotalDefects(totalDefects);
      setOverallDefectRateData([{ date: transformedData.date, defectRate: overallDefectRate }]);
      setLineChartData([transformedData]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <StatisticsHeader totalDevices={totalDevices} />
      <OverallDefectRateProgressBar data={overallDefectRateData} totalDefects={totalDefects} />
      <DevicesByGrade data={screenDamageData} />
      <DefectRateForDate data={lineChartData} />
    </div>
  );
};

export default StatisticsPage;
