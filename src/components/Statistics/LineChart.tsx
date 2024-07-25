import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { lineChartData } from '../../types/statistics';

interface LineChartComponentProps {
  data: lineChartData;
}

const LineChartComponent: React.FC<LineChartComponentProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="oil" stroke="#82ca9d" name="Oil" />
      <Line type="monotone" dataKey="scratch" stroke="#ffc658" name="Scratch" />
      <Line type="monotone" dataKey="stain" stroke="#ff7300" name="Stain" />
      <Line type="monotone" dataKey="defectRate" stroke="#ff0000" name="Defect Rate (%)" dot={false} />
    </LineChart>
  </ResponsiveContainer>
);

export default LineChartComponent;
