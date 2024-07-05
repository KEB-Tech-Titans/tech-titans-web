// 총 개수 API 호출 함수
export const fetchTotalDevices = async (): Promise<number> => {
  // 실제 API 호출 대신 가상의 데이터 반환
  return 50; // 총 검사한 스마트폰의 개수
};

// 날짜별 파손 데이터 가상의 API 호출 함수
export const fetchScreenDamageData = async (): Promise<{ date: string; noDamage: number; gradeA: number; gradeB: number; gradeC: number }[]> => {
  // 실제 API 호출 대신 가상의 데이터 반환
  return [
    { date: '2023-07-01', noDamage: 5, gradeA: 1, gradeB: 2, gradeC: 3 },
    { date: '2023-07-02', noDamage: 6, gradeA: 2, gradeB: 1, gradeC: 4 },
    { date: '2023-07-03', noDamage: 4, gradeA: 3, gradeB: 2, gradeC: 5 },
  ];
};
