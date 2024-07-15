import React, { useState, useEffect } from 'react';
import { fetchScreenDamageData, fetchTotalDevices } from '../../api/api';
import { damageData, lineChartData } from '../../types/statistics';
import DefectRateForDate from '../../components/Statistics/DefectRateForDate';
import DevicesByGrade from '../../components/Statistics/DevicesByGrade';
import StatisticsHeader from '../../components/Statistics/StatisticsHeader';

const StatisticsPage: React.FC = () => {
  const [screenDamageData, setScreenDamageData] = useState<damageData>([]);
  const [totalDevices, setTotalDevices] = useState<number>(0);
  const [lineChartData, setLineChartData] = useState<lineChartData>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [damageData, total] = await Promise.all([
        fetchScreenDamageData(),
        fetchTotalDevices(),
      ]);
      setScreenDamageData([
        {
          name: 'S',
          value: damageData.reduce((acc, cur) => acc + cur.noDamage, 0),
        },
        {
          name: 'A',
          value: damageData.reduce((acc, cur) => acc + cur.gradeA, 0),
        },
        {
          name: 'B',
          value: damageData.reduce((acc, cur) => acc + cur.gradeB, 0),
        },
        {
          name: 'C',
          value: damageData.reduce((acc, cur) => acc + cur.gradeC, 0),
        },
      ]);
      setTotalDevices(total);
      setLineChartData(
        damageData.map((item) => ({
          date: item.date,
          noDamage: item.noDamage,
          gradeA: item.gradeA,
          gradeB: item.gradeB,
          gradeC: item.gradeC,
          defectRate:
            ((item.gradeA + item.gradeB + item.gradeC) /
              (item.noDamage + item.gradeA + item.gradeB + item.gradeC)) *
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

      <DevicesByGrade data={screenDamageData} />

      <DefectRateForDate data={lineChartData} />
    </div>
  );
};

export default StatisticsPage;
