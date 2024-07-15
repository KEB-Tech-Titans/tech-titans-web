import { gradeInfoType } from '../types/grade';

export const GRADE: gradeInfoType[] = [
  { grade: 'S', description: '외관상 보이는 흠집이나 손상 여부가 없어요.' },
  {
    grade: 'A',
    description: '외관상 관찰되는 작은 스크래치나 흠집이 1~2개 존재해요.',
  },
  {
    grade: 'B',
    description: '외관상 관찰되는 작은 스크래치나 흠집이 3개 이상 존재해요.',
  },
  {
    grade: 'C',
    description: '외관상 관찰되는 작은 스크래치나 흠집이 5개 이상 존재해요.',
  },
];
