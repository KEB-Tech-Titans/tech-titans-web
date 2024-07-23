// 총 개수 API 호출 함수
export const fetchTotalDevices = async (): Promise<number> => {
  // 실제 API 호출 대신 가상의 데이터 반환
  return 50; // 총 검사한 스마트폰의 개수
};

// 날짜별 파손 데이터 가상의 API 호출 함수
export const fetchScreenDamageData = async (): Promise<{ date: string; noDamage: number; oil: number; scratch: number; stain: number }[]> => {
  // 실제 API 호출 대신 가상의 데이터 반환
  return [
    { date: '2024-07-01', noDamage: 5, oil: 1, scratch: 2, stain: 3 },
    { date: '2024-07-02', noDamage: 6, oil: 2, scratch: 1, stain: 4 },
    { date: '2024-07-03', noDamage: 4, oil: 3, scratch: 2, stain: 5 },
  ];
};
