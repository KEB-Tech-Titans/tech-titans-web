import axios from 'axios';

const API_BASE_URL = 'http://172.16.207.12:8520';

export const fetchTotalDevices = async (): Promise<number> => {
  const response = await axios.get(`${API_BASE_URL}/inspection/count/analyzedFile`);
  return response.data.data;
};

export const fetchDefectCount = async (type: string, year: number, month?: number, date?: number): Promise<number> => {
  let url = `${API_BASE_URL}/inspection/count/defect`;
  if (year) url += `?year=${year}`;
  if (month) url += `&month=${month}`;
  if (date) url += `&date=${date}`;

  const response = await axios.get(url);
  const defectData = response.data.data.find((item: any) => item.defectType === type);
  return defectData ? defectData.number : 0;
};

export const fetchOverallDefectRate = async (year: number, month?: number, date?: number): Promise<number> => {
  let url = `${API_BASE_URL}/inspection/defectRate`;
  if (year) url += `?year=${year}`;
  if (month) url += `&month=${month}`;
  if (date) url += `&date=${date}`;

  const response = await axios.get(url);
  return response.data.data;
};

export const fetchDataForDate = async (year: string | null, month: string | null, day: string | null): Promise<any> => {
  const params = new URLSearchParams();
  if (year) params.append('year', year);
  if (month) params.append('month', month);
  if (day) params.append('date', day);

  try {
    const response = await axios.get(`${API_BASE_URL}/inspection/count/defect`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching data for date:', error);
    throw error;
  }
};
