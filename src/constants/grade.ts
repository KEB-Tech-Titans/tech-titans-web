import { gradeInfoType } from '../types/grade';

export const GRADE: gradeInfoType[] = [
  { grade: 'No Damage', description: '표면에 보이는 손상이나 흠집이 없습니다.' },
  {
    grade: 'Oil',
    description: '표면에 오일 얼룩이 보입니다.',
  },
  {
    grade: 'Scratch',
    description: '표면에 스크래치가 보입니다.',
  },
  {
    grade: 'Stain',
    description: '표면에 얼룩이 보입니다.',
  },
];
