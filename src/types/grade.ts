export type gradeType = 'Oil' | 'Scratch' | 'Stain';

export type gradeInfoType = { grade: gradeType; description: string };


export type DefectTypeInfo = {
  defectType: string;
  number: number;
  date: string | null;
};

export type defectInfoType = {
  analyzedFileName: string;
  analyzedImagePath: string;
  defectSeverity: number;
  inspectionTime: string;
  numberOfDefectiveResponseDtoList: DefectTypeInfo[];
};

export type DefectProductResponse = {
  content: defectInfoType[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  hasPrevious: boolean;
  hasNext: boolean;
};
