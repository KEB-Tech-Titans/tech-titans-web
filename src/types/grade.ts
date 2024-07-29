export type gradeInfoType = { grade: gradeType; description: string };

export type gradeType = 'S' | 'A' | 'B' | 'C';

export type defectInfoType = {
  id?: number;
  oil: number;
  scratch: number;
  stain: number;
  blackSpot?: number; // 디자인 상에서 카드 내에 blackSpot 미표기로 인한 옵셔널 체이닝 연산자 적용
  url?: string;
  severity?: number;
  checkDate?: string;
};
