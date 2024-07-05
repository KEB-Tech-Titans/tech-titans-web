import React, { useState, useEffect } from 'react';
import PieChartComponent from '../../components/Statistics/PieChart';
import LineChartComponent from '../../components/Statistics/LineChart';
import { fetchScreenDamageData, fetchTotalDevices } from '../../api/api';
import '../../styles/StatisticsPage.css';

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
        { name: 'No Damage', value: damageData.reduce((acc, cur) => acc + cur.noDamage, 0) },
        { name: 'Grade A', value: damageData.reduce((acc, cur) => acc + cur.gradeA, 0) },
        { name: 'Grade B', value: damageData.reduce((acc, cur) => acc + cur.gradeB, 0) },
        { name: 'Grade C', value: damageData.reduce((acc, cur) => acc + cur.gradeC, 0) },
      ]);
      setTotalDevices(total);
      setLineChartData(damageData.map(item => ({
        ...item,
        defectRate: ((item.gradeA + item.gradeB + item.gradeC) / (item.noDamage + item.gradeA + item.gradeB + item.gradeC)) * 100,
      })));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="statistics-page">
      <h1 className="statistics-title">Statistics Dashboard</h1>
      <div className="total-devices">
        <h2>Total Inspected Devices: {totalDevices}</h2>
      </div>
      <div className="chart-section">
        <h2 className="chart-title">Number of Good and Defective Products by Grade</h2>
        <div className="statistics-content">
          <div className="chart">
            <PieChartComponent data={screenDamageData} />
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Grade</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>
                {screenDamageData.map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="line-chart-section">
        <h2 className="chart-title">Defect Rate by Date</h2>
        <div className="line-chart-container">
          <LineChartComponent data={lineChartData} />
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;