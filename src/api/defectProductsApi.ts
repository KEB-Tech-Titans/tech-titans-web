import axios from 'axios';

interface DefectProductParams {
  startDate?: string;
  endDate?: string;
  defectType?: string;
  limit: number;
  offset: number;
}

const API_URL = 'http://172.16.167.20:8520/inspection/detail';

export const fetchDefectProducts = async (params: DefectProductParams) => {
  try {
    // 요청 파라미터 확인용 로그
    console.log('Request params:', params);

    const response = await axios.get(API_URL, {
      params: {
        startDate: params.startDate,
        endDate: params.endDate,
        defectType: params.defectType,
        limit: params.limit,
        offset: params.offset,
      },
    });

    console.log('API response:', response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error response data:', error.response?.data);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
};
