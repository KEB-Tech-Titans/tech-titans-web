import axios from 'axios';

const API_BASE_URL = 'http://172.16.224.146:8520';

export const fetchTotalDevices = async (year?: number, month?: number, date?: number): Promise<number> => {
  try {
    let url = `${API_BASE_URL}/inspection/count/analyzedFile`;
    const params = new URLSearchParams();
    if (year) params.append('year', year.toString());
    if (month) params.append('month', month.toString());
    if (date) params.append('date', date.toString());
    const response = await axios.get(url, { params });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching total devices:', error);
    throw error;
  }
};

export const fetchDefectCount = async (type: string, year: number, month?: number, date?: number): Promise<number> => {
  try {
    let url = `${API_BASE_URL}/inspection/count/defect?defectType=${type}`;
    if (year) url += `&year=${year}`;
    if (month) url += `&month=${month}`;
    if (date) url += `&date=${date}`;

    const response = await axios.get(url);
    const defectData = response.data.data.find((item: any) => item.defectType === type);
    return defectData ? defectData.number : 0;
  } catch (error) {
    console.error(`Error fetching defect count for type ${type}:`, error);
    throw error;
  }
};

export const fetchOverallDefectRate = async (year: number, month?: number, date?: number): Promise<number> => {
  try {
    let url = `${API_BASE_URL}/inspection/defectRate`;
    if (year) url += `?year=${year}`;
    if (month) url += `&month=${month}`;
    if (date) url += `&date=${date}`;

    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching overall defect rate:', error);
    throw error;
  }
};

export const fetchDataForDate = async (year: string | null, month: string | null, day: string | null): Promise<any> => {
  try {
    const params = new URLSearchParams();
    if (year) params.append('year', year);
    if (month) params.append('month', month);
    if (day) params.append('date', day);

    const response = await axios.get(`${API_BASE_URL}/inspection/count/defect/date`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching data for date:', error);
    throw error;
  }
};
