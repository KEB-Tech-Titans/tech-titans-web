import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

// PieChartComponent의 인터페이스 정의
interface PieChartData {
  name: string;
  value: number;
}

interface PieChartComponentProps {
  data: PieChartData[];
  title?: string;
}

// 색상 배열 정의
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// PieChartComponent 컴포넌트 정의
const PieChartComponent: React.FC<PieChartComponentProps> = ({ data, title }) => {
  return (
    <div>
      {title && <h2 className="chart-title">{title}</h2>}
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
          outerRadius={80}
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
          <div key={`legend-${index}`} style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
            <div style={{ width: '20px', height: '20px', backgroundColor: COLORS[index % COLORS.length], marginRight: '5px' }}></div>
            <span style={{ color: COLORS[index % COLORS.length] }}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartComponent;
