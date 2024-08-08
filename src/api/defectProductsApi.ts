import axios from 'axios';
import { API_BASE_URL } from './api';

interface DefectProductParams {
  startDate?: string;
  endDate?: string;
  defectType?: string;
  limit: number;
  offset: number;
}

const DP_API_URL = `${API_BASE_URL}/inspection/detail`;

export const fetchDefectProducts = async (params: DefectProductParams) => {
  try {
    console.log('Request params:', params);

    const response = await axios.get(DP_API_URL, {
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
