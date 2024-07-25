export type gradeType = 'Oil' | 'Scratch' | 'Stain';

export type damageDataType = {
  name: gradeType;
  value: number;
};

export type damageData = damageDataType[];

export type lineChartDataType = {
  date: string;
  oil: number;
  scratch: number;
  stain: number;
  defectRate?: number;
};

export type lineChartData = lineChartDataType[];

export type overallDefectRateDataType = {
  date: string;
  defectRate: number;
};
