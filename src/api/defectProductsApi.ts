import axios from 'axios';

interface DefectProductParams {
  startDate?: string;
  endDate?: string;
  defectType?: string;
  limit: number;
  offset: number;
}

const API_URL = 'https://123123:8520/inspection/detail'; // 실제 백엔드 API URL로 변경하세요

export const fetchDefectProducts = async (params: DefectProductParams) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        startDate: params.startDate,
        endDate: params.endDate,
        defectType: params.defectType,
        limit: params.limit,
        offset: params.offset,
      },
    });
    return response.data; // API 응답 데이터
  } catch (error) {
    console.error('Error fetching defect products:', error);
    throw error;
  }
};
