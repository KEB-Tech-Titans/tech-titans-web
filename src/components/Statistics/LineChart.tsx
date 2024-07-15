import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// LineChartComponent의 인터페이스 정의
interface LineChartData {
  date: string;
  noDamage: number;
  gradeA: number;
  gradeB: number;
  gradeC: number;
  defectRate?: number;
}

interface LineChartComponentProps {
  data: LineChartData[];
}

// LineChartComponent 컴포넌트 정의
const LineChartComponent: React.FC<LineChartComponentProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="noDamage" stroke="#8884d8" name="손상 없음" />
        <Line type="monotone" dataKey="gradeA" stroke="#82ca9d" name="등급 A" />
        <Line type="monotone" dataKey="gradeB" stroke="#ffc658" name="등급 B" />
        <Line type="monotone" dataKey="gradeC" stroke="#ff7300" name="등급 C" />
        <Line type="monotone" dataKey="defectRate" stroke="#ff0000" name="불량률 (%)" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
