import { gradeType } from './grade';

export type damageDataType = {
  name: gradeType;
  value: number;
};

export type damageData = damageDataType[];

export type lineChartDataType = {
  date: string;
  noDamage: number;
  gradeA: number;
  gradeB: number;
  gradeC: number;
  defectRate?: number;
};

export type lineChartData = lineChartDataType[];
