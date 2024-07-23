export type gradeType = 'No Damage' | 'Oil' | 'Scratch' | 'Stain';

export type gradeInfoType = { grade: gradeType; description: string };

export type defectInfoType = { oil: number; scratch: number; stain: number };
