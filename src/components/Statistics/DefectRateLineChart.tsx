import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// DefectRateChartComponent의 인터페이스 정의
interface DefectRateChartData {
  date: string;
  defectRate: number;
}

interface DefectRateChartComponentProps {
  data: DefectRateChartData[];
}

// DefectRateChartComponent 컴포넌트 정의
const DefectRateChartComponent: React.FC<DefectRateChartComponentProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="defectRate" stroke="#ff0000" name="Defect Rate (%)" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DefectRateChartComponent;
