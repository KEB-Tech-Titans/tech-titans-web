export const fetchTotalDevices = async (): Promise<number> => {
  // Commented out the actual API call for now
  // const response = await fetch('http://172.16.156.67:8520/inspection/total');
  // const data = await response.json();
  // return data.totalDevices;

  // Temporary hardcoded data
  const data = { totalDevices: 1000 };
  return data.totalDevices;
};

// 날짜별 파손 데이터 가상의 API 호출 함수
export const fetchScreenDamageData = async (): Promise<{ date: string; noDamage: number; oil: number; scratch: number; stain: number }[]> => {
  // 실제 API 호출 대신 가상의 데이터 반환
  return [
    { date: '2024-07-01', noDamage: 5, oil: 1, scratch: 2, stain: 3 },
    { date: '2024-07-02', noDamage: 6, oil: 2, scratch: 1, stain: 4 },
    { date: '2024-07-03', noDamage: 4, oil: 3, scratch: 2, stain: 5 },
    { date: '2024-07-01', noDamage: 5, oil: 1, scratch: 2, stain: 3 },
    { date: '2024-07-02', noDamage: 6, oil: 2, scratch: 1, stain: 4 },
    { date: '2024-07-03', noDamage: 4, oil: 3, scratch: 2, stain: 5 },
    { date: '2024-07-01', noDamage: 5, oil: 1, scratch: 2, stain: 3 },
    { date: '2024-07-02', noDamage: 6, oil: 2, scratch: 1, stain: 4 },
    { date: '2024-07-03', noDamage: 4, oil: 3, scratch: 2, stain: 5 },
    { date: '2024-07-01', noDamage: 5, oil: 1, scratch: 2, stain: 3 },
    { date: '2024-07-02', noDamage: 6, oil: 2, scratch: 1, stain: 4 },
    { date: '2024-07-03', noDamage: 4, oil: 3, scratch: 2, stain: 5 },
    { date: '2024-07-01', noDamage: 5, oil: 1, scratch: 2, stain: 3 },
    { date: '2024-07-02', noDamage: 6, oil: 2, scratch: 1, stain: 4 },
    { date: '2024-07-03', noDamage: 4, oil: 3, scratch: 2, stain: 5 },
    { date: '2024-07-01', noDamage: 5, oil: 1, scratch: 2, stain: 3 },
    { date: '2024-07-02', noDamage: 6, oil: 2, scratch: 1, stain: 4 },
    { date: '2024-07-03', noDamage: 4, oil: 3, scratch: 2, stain: 5 },
    { date: '2024-07-01', noDamage: 5, oil: 1, scratch: 2, stain: 3 },
    { date: '2024-07-02', noDamage: 6, oil: 2, scratch: 1, stain: 4 },
    { date: '2024-07-03', noDamage: 4, oil: 3, scratch: 2, stain: 5 },
    { date: '2024-07-01', noDamage: 5, oil: 1, scratch: 2, stain: 3 },
    { date: '2024-07-02', noDamage: 6, oil: 2, scratch: 1, stain: 4 },
    { date: '2024-07-03', noDamage: 4, oil: 3, scratch: 2, stain: 5 },
    { date: '2024-07-01', noDamage: 5, oil: 1, scratch: 2, stain: 3 },
    { date: '2024-07-02', noDamage: 6, oil: 2, scratch: 1, stain: 4 },
    { date: '2024-07-03', noDamage: 4, oil: 3, scratch: 2, stain: 5 },
    { date: '2024-07-01', noDamage: 5, oil: 1, scratch: 2, stain: 3 },
    { date: '2024-07-02', noDamage: 6, oil: 2, scratch: 1, stain: 4 },
    { date: '2024-07-03', noDamage: 4, oil: 3, scratch: 2, stain: 5 },
  ];
  
export const fetchDefectCount = async (defectType: string, date: string): Promise<number> => {
  // Commented out the actual API call for now
  // const response = await fetch(`http://172.16.156.67:8520/inspection/count?defect=${defectType.toUpperCase()}&date=${date}`, {
  //   method: 'GET',
  //   headers: {
  //     'Accept': '*/*'
  //   }
  // });
  // if (!response.ok) {
  //   throw new Error(`Error: ${response.statusText}`);
  // }
  // const result = await response.json();
  // return result.data.number || 0;

  // Temporary hardcoded data
  const defectCounts: { [key: string]: number } = {
    OIL: 50,
    SCRATCH: 30,
    STAIN: 20,
  };
  return defectCounts[defectType.toUpperCase()] || 0;
};
