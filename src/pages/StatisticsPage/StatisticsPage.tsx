import React, { useState, useEffect } from 'react';
import { fetchDefectCount, fetchTotalDevices, fetchOverallDefectRate } from '../../api/api';
import { damageDataType, lineChartDataType, overallDefectRateDataType } from '../../types/statistics';
import DefectRateForDate from '../../components/Statistics/DefectRateForDate';
import DevicesByGrade from '../../components/Statistics/DevicesByGrade';
import StatisticsHeader from '../../components/Statistics/StatisticsHeader';
import OverallDefectRateProgressBar from '../../components/Statistics/OverallDefectRateProgressBar';
import DateDropdown from '../../components/Statistics/DateDropdown';

const StatisticsPage: React.FC = () => {
  const [screenDamageData, setScreenDamageData] = useState<damageDataType[]>([]);
  const [totalDevices, setTotalDevices] = useState<number>(0);
  const [lineChartData, setLineChartData] = useState<lineChartDataType[]>([]);
  const [overallDefectRateData, setOverallDefectRateData] = useState<overallDefectRateDataType[]>([]);
  const [totalDefects, setTotalDefects] = useState<number>(0);

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    fetchData(year, month, date);
  }, []);

  const fetchData = async (year: number, month?: number, date?: number) => {
    try {
      const total = await fetchTotalDevices();
      const oilCount = await fetchDefectCount('OIL', year, month, date);
      const scratchCount = await fetchDefectCount('SCRATCH', year, month, date);
      const stainCount = await fetchDefectCount('STAIN', year, month, date);

      const totalDefects = oilCount + scratchCount + stainCount;
      const overallDefectRate = await fetchOverallDefectRate(year, month, date);

      const transformedData = {
        date: `${year}-${month}-${date}`,
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

  const handleDateChange = (year: string | null, month: string | null, day: string | null) => {
    const y = year ? parseInt(year) : undefined;
    const m = month ? parseInt(month) : undefined;
    const d = day ? parseInt(day) : undefined;

    if (y) fetchData(y, m, d);
    else {
      const today = new Date();
      fetchData(today.getFullYear(), today.getMonth() + 1, today.getDate());
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <StatisticsHeader totalDevices={totalDevices} />
      <DateDropdown onDateChange={handleDateChange} />
      <OverallDefectRateProgressBar data={overallDefectRateData} totalDefects={totalDefects} />
      <DevicesByGrade data={screenDamageData} />
      <DefectRateForDate data={lineChartData} />
    </div>
  );
};

export default StatisticsPage;
