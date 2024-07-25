import { gradeType } from './grade';

export type damageDataType = {
  name: gradeType;
  value: number;
};

export type damageData = damageDataType[];

export type lineChartDataType = {
  date: string;
  blackSpot: number;
  oil: number; // gradeA를 oil로 변경
  scratch: number; // gradeB를 scratch로 변경
  stain: number; // gradeC를 stain으로 변경
  defectRate?: number;
};

export type lineChartData = lineChartDataType[];

export type overallDefectRateDataType = {
  date: string;
  defectRate: number;
};
