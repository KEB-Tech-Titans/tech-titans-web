import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

const LineChartComponent: React.FC<LineChartComponentProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="noDamage" stroke="#8884d8" name="No Damage" />
        <Line type="monotone" dataKey="gradeA" stroke="#82ca9d" name="Grade A" />
        <Line type="monotone" dataKey="gradeB" stroke="#ffc658" name="Grade B" />
        <Line type="monotone" dataKey="gradeC" stroke="#ff7300" name="Grade C" />
        <Line type="monotone" dataKey="defectRate" stroke="#ff0000" name="Defect Rate (%)" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;