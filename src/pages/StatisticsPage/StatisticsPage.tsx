import React, { useState, useEffect } from 'react';
import { fetchDefectCount, fetchTotalDevices, fetchOverallDefectRate, fetchDataForDate } from '../../api/api';
import { damageDataType, lineChartDataType, overallDefectRateDataType } from '../../types/statistics';
import DefectRateForDate from '../../components/Statistics/DefectRateForDate';
import DevicesByGrade from '../../components/Statistics/DevicesByGrade';
import StatisticsHeader from '../../components/Statistics/StatisticsHeader';
import OverallDefectRateProgressBar from '../../components/Statistics/OverallDefectRateProgressBar';
import DateDropdown from '../../components/Statistics/DateDropdown';

// 날짜 형식에 따라 변환하는 함수
const parseDate = (dateStr: string) => {
  const [year, month = '01', day = '01'] = dateStr.split('-').map(part => part.padStart(2, '0'));
  return new Date(`${year}-${month}-${day}`);
};

// 데이터 집계 함수
const aggregateData = (data: any[], total: number) => {
  const aggregated: { [key: string]: lineChartDataType } = {};

  data.forEach(item => {
    const date = parseDate(item.date).toISOString().split('T')[0];
    if (!aggregated[date]) {
      aggregated[date] = {
        date,
        oil: 0,
        scratch: 0,
        stain: 0,
        defectRate: 0,
      };
    }
    if (item.defectType === 'OIL') {
      aggregated[date].oil += item.number;
    } else if (item.defectType === 'SCRATCH') {
      aggregated[date].scratch += item.number;
    } else if (item.defectType === 'STAIN') {
      aggregated[date].stain += item.number;
    }
    // defectRate 계산
    const totalDefects = aggregated[date].oil + aggregated[date].scratch + aggregated[date].stain;
    aggregated[date].defectRate = (totalDefects / total) * 100;
  });

  return Object.values(aggregated);
};

const StatisticsPage: React.FC = () => {
  const [screenDamageData, setScreenDamageData] = useState<damageDataType[]>([]);
  const [totalDevices, setTotalDevices] = useState<number>(0);
  const [lineChartData, setLineChartData] = useState<lineChartDataType[]>([]);
  const [overallDefectRateData, setOverallDefectRateData] = useState<overallDefectRateDataType[]>([]);
  const [totalDefects, setTotalDefects] = useState<number>(0);
  const [isDataFetched, setIsDataFetched] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (year?: number, month?: number, date?: number) => {
    try {
      setError(null);
      const total = await fetchTotalDevices(year, month, date);
      const oilCount = await fetchDefectCount('OIL', year ?? new Date().getFullYear(), month, date);
      const scratchCount = await fetchDefectCount('SCRATCH', year ?? new Date().getFullYear(), month, date);
      const stainCount = await fetchDefectCount('STAIN', year ?? new Date().getFullYear(), month, date);
  
      
      const overallDefectRate = await fetchOverallDefectRate(year ?? new Date().getFullYear(), month, date);
      const totalDefects = Math.floor((overallDefectRate / 100) * total); //임시방편, 추가 수정 필요
      const defectData = await fetchDataForDate(year ? year.toString() : null, month ? month.toString() : null, date ? date.toString() : null);
  
      console.log('Fetched defect data:', defectData);
  
      // defectData의 구조에 따라 배열로 변환
      const defectArray = Array.isArray(defectData) ? defectData : (defectData.data ? defectData.data : []);
  
      const aggregatedData = aggregateData(defectArray, total);

      console.log(aggregatedData);
  
      setScreenDamageData([
        { name: 'Oil', value: oilCount },
        { name: 'Scratch', value: scratchCount },
        { name: 'Stain', value: stainCount },
      ]);
  
      setTotalDevices(total);
      setTotalDefects(totalDefects);
      setOverallDefectRateData([{ date: new Date().getFullYear().toString(), defectRate: overallDefectRate }]); // 연도만 표시
      setLineChartData(aggregatedData);
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
    fetchData();
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
