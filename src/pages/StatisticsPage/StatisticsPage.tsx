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
  const [isDataFetched, setIsDataFetched] = useState<boolean>(true); // 초기 마운트 시 전체 데이터를 표시하도록 설정
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData(); // 초기 상태에서 전체 데이터를 가져옴
  }, []);

  const fetchData = async (year?: number, month?: number, date?: number) => {
    try {
      setError(null);
      const total = await fetchTotalDevices(year, month, date);
      const oilCount = await fetchDefectCount('OIL', year ?? new Date().getFullYear(), month, date);
      const scratchCount = await fetchDefectCount('SCRATCH', year ?? new Date().getFullYear(), month, date);
      const stainCount = await fetchDefectCount('STAIN', year ?? new Date().getFullYear(), month, date);

      const totalDefects = oilCount + scratchCount + stainCount;
      const overallDefectRate = await fetchOverallDefectRate(year ?? new Date().getFullYear(), month, date);

      const transformedData = {
        date: `${year ?? 'All'}-${month ?? 'All'}-${date ?? 'All'}`,
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
      setIsDataFetched(true);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('데이터를 가져오는 중 오류가 발생했습니다. 네트워크 상태를 확인하세요.');
      setIsDataFetched(false);
    }
  };

  const handleDateChange = (year: string | null, month: string | null, day: string | null) => {
    const y = year ? parseInt(year) : undefined;
    const m = month ? parseInt(month) : undefined;
    const d = day ? parseInt(day) : undefined;

    fetchData(y, m, d);
  };

  const handleReset = () => {
    setScreenDamageData([]);
    setTotalDevices(0);
    setLineChartData([]);
    setOverallDefectRateData([]);
    setTotalDefects(0);
    setIsDataFetched(false);
    fetchData(); // 전체 데이터를 다시 가져옴
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <DateDropdown onDateChange={handleDateChange} onReset={handleReset} />
      {error && <div className="text-red-500">{error}</div>}
      {isDataFetched && (
        <>
          <StatisticsHeader totalDevices={totalDevices} />
          <OverallDefectRateProgressBar data={overallDefectRateData} totalDefects={totalDefects} />
          <DevicesByGrade data={screenDamageData} />
          <DefectRateForDate data={lineChartData} />
        </>
      )}
    </div>
  );
};

export default StatisticsPage;
