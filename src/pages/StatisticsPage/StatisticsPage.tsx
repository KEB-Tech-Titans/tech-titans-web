import React, { useState, useEffect } from 'react';
import PieChartComponent from '../../components/Statistics/PieChart';
import LineChartComponent from '../../components/Statistics/LineChart';
import { fetchScreenDamageData, fetchTotalDevices } from '../../api/api';

const StatisticsPage: React.FC = () => {
  const [screenDamageData, setScreenDamageData] = useState<{ name: string; value: number }[]>([]);
  const [totalDevices, setTotalDevices] = useState<number>(0);
  const [lineChartData, setLineChartData] = useState<{ date: string; noDamage: number; gradeA: number; gradeB: number; gradeC: number; defectRate?: number }[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [damageData, total] = await Promise.all([fetchScreenDamageData(), fetchTotalDevices()]);
      setScreenDamageData([
        { name: '손상 없음', value: damageData.reduce((acc, cur) => acc + cur.noDamage, 0) },
        { name: '등급 A', value: damageData.reduce((acc, cur) => acc + cur.gradeA, 0) },
        { name: '등급 B', value: damageData.reduce((acc, cur) => acc + cur.gradeB, 0) },
        { name: '등급 C', value: damageData.reduce((acc, cur) => acc + cur.gradeC, 0) },
      ]);
      setTotalDevices(total);
      setLineChartData(damageData.map(item => ({
        date: item.date,
        noDamage: item.noDamage,
        gradeA: item.gradeA,
        gradeB: item.gradeB,
        gradeC: item.gradeC,
        defectRate: ((item.gradeA + item.gradeB + item.gradeC) / (item.noDamage + item.gradeA + item.gradeB + item.gradeC)) * 100,
      })));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-5">통계 대시보드</h1>
        <h2 className="text-xl font-bold text-gray-800">총 검사한 기기: {totalDevices}대</h2>
      </div>
      <div className="mb-8">
        <h2 className="flex items-center justify-center text-xl text-gray-800 mb-5">
          <span className="text-gray-800 mr-2">■</span>등급별 양품 및 불량품 수
        </h2>
        <div className="bg-white p-5 rounded-lg shadow">
          <div className="flex justify-between items-stretch relative overflow-visible">
            <div className="flex-1 flex flex-col items-center justify-center pr-2 overflow-visible">
              <PieChartComponent data={screenDamageData} />
            </div>
            <div className="flex-1 flex items-center pl-2 z-10"> {/* z-index를 조정하여 겹침 방지 */}
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2 bg-gray-100 font-bold">등급</th>
                    <th className="border border-gray-300 p-2 bg-gray-100 font-bold">수량</th>
                  </tr>
                </thead>
                <tbody>
                  {screenDamageData.map((item) => (
                    <tr key={item.name}>
                      <td className="border border-gray-300 p-2 text-center">{item.name}</td>
                      <td className="border border-gray-300 p-2 text-center">{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-5 rounded-lg shadow mt-10">
        <h2 className="flex items-center justify-center text-xl text-gray-800 mb-5">
          <span className="text-gray-800 mr-2">■</span>날짜별 불량률
        </h2>
        <div className="flex items-center justify-center">
          <LineChartComponent data={lineChartData} />
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
