import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// LineChartComponent의 인터페이스 정의
interface LineChartData {
  date: string;
  blackSpot: number;
  oil: number; // 기존 gradeA를 oil로 변경
  scratch: number; // 기존 gradeB를 scratch로 변경
  stain: number; // 기존 gradeC를 stain으로 변경
  defectRate?: number;
}

interface LineChartComponentProps {
  data: lineChartData;
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
        <Line type="monotone" dataKey="oil" stroke="#82ca9d" name="Oil" /> {/* 기존 등급 A를 오일로 변경 */}
        <Line type="monotone" dataKey="scratch" stroke="#ffc658" name="Scratch" /> {/* 기존 등급 B를 스크래치로 변경 */}
        <Line type="monotone" dataKey="stain" stroke="#ff7300" name="Stain" /> {/* 기존 등급 C를 얼룩으로 변경 */}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;