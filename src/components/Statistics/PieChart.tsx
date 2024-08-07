import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

interface PieChartData {
  name: string;
  value: number;
}

interface PieChartComponentProps {
  data: PieChartData[];
  title?: string;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartComponent: React.FC<PieChartComponentProps> = ({ data, title }) => (
  <div>
    {title && <h2 className="chart-title">{title}</h2>}
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={195}
        cy={195}
        labelLine={false}
        label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
        outerRadius={75}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
    <div className="legend">
      {data.map((item, index) => (
        <div key={`legend-${index}`} className="flex items-center mx-1">
          <div className="size-5" style={{ backgroundColor: COLORS[index % COLORS.length], marginRight: '4px' }}></div>
          <span style={{ color: COLORS[index % COLORS.length] }}>{item.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default PieChartComponent;
