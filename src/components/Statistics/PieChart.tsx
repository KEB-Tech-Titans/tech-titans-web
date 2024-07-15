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
const COLORS = ['bg-[#0088FE]', 'bg-[#00C49F]', 'bg-[#FFBB28]', 'bg-[#FF8042]'];
const CELL_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const TEXT_COLORS = [
  'text-[#0088FE]',
  'text-[#00C49F]',
  'text-[#FFBB28]',
  'text-[#FF8042]',
];

// PieChartComponent 컴포넌트 정의
const PieChartComponent: React.FC<PieChartComponentProps> = ({
  data,
  title,
}) => {
  return (
    <div>
      {title && <h2 className="chart-title">{title}</h2>}
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={({ name, value, percent }) =>
            `${name} 등급: ${value} (${(percent * 100).toFixed(0)}%)`
          }
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={CELL_COLORS[index % CELL_COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <div className="legend">
        {data.map((item, index) => (
          <div key={`legend-${index}`} className="flex items-center mx-1">
            <div
              className={`size-5 ${COLORS[index % COLORS.length]} mr-1`}
            ></div>
            <span className={`${TEXT_COLORS[index % TEXT_COLORS.length]}`}>
              {item.name} 등급
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartComponent;
