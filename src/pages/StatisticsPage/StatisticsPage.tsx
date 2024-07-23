import React, { useState, useEffect } from 'react';
import { fetchScreenDamageData, fetchTotalDevices } from '../../api/api';
import { damageData, lineChartData, overallDefectRateDataType } from '../../types/statistics';
import DefectRateForDate from '../../components/Statistics/DefectRateForDate';
import DevicesByGrade from '../../components/Statistics/DevicesByGrade';
import StatisticsHeader from '../../components/Statistics/StatisticsHeader';
import OverallDefectRateProgressBar from '../../components/Statistics/OverallDefectRateProgressBar';

const StatisticsPage: React.FC = () => {
  const [screenDamageData, setScreenDamageData] = useState<damageData>([]);
  const [totalDevices, setTotalDevices] = useState<number>(0);
  const [lineChartData, setLineChartData] = useState<lineChartData>([]);
  const [overallDefectRateData, setOverallDefectRateData] = useState<overallDefectRateDataType[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [damageData, total] = await Promise.all([
        fetchScreenDamageData(),
        fetchTotalDevices(),
      ]);

      // 데이터를 변환하여 사용할 수 있도록 처리
      const transformedData = damageData.map(item => ({
        date: item.date,
        noDamage: item.noDamage,
        oil: item.oil,
        scratch: item.scratch,
        stain: item.stain,
      }));

      // 전체 불량률 계산
      const overallDefectRateData = transformedData.map(item => ({
        date: item.date,
        defectRate:
          ((item.oil + item.scratch + item.stain) /
            (item.noDamage + item.oil + item.scratch + item.stain)) *
          100,
      }));

      // 화면에 표시할 데이터 설정
      setScreenDamageData([
        {
          name: 'No Damage',
          value: transformedData.reduce((acc, cur) => acc + cur.noDamage, 0),
        },
        {
          name: 'Oil',
          value: transformedData.reduce((acc, cur) => acc + cur.oil, 0),
        },
        {
          name: 'Scratch',
          value: transformedData.reduce((acc, cur) => acc + cur.scratch, 0),
        },
        {
          name: 'Stain',
          value: transformedData.reduce((acc, cur) => acc + cur.stain, 0),
        },
      ]);

      setTotalDevices(total);
      setOverallDefectRateData(overallDefectRateData);
      setLineChartData(
        transformedData.map((item) => ({
          date: item.date,
          noDamage: item.noDamage,
          oil: item.oil,
          scratch: item.scratch,
          stain: item.stain,
          defectRate:
            ((item.oil + item.scratch + item.stain) /
              (item.noDamage + item.oil + item.scratch + item.stain)) *
            100,
        }))
      );
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <StatisticsHeader totalDevices={totalDevices} />
      <OverallDefectRateProgressBar data={overallDefectRateData} />
      <DevicesByGrade data={screenDamageData} />
      <DefectRateForDate data={lineChartData} />
    </div>
  );
};

export default StatisticsPage;