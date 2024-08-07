import React from 'react';
import { damageData } from '../../types/statistics';
import PieChartComponent from './PieChart';
import StatisticTable from './StatisticTable';

interface DevicesByGradeProps {
  data: damageData;
}

const DevicesByGrade: React.FC<DevicesByGradeProps> = ({ data }) => (
  <div className="mb-8">
    <h2 className="text-center text-xl text-gray-800 mb-5">
      <span className="text-gray-800 mr-2">■</span> 결함 종류별 불량률
    </h2>
    <div className="bg-white p-5 rounded-lg shadow flex flex-col md:flex-row">
      <div className="flex-1 flex flex-col items-center justify-center pr-2 overflow-visible">
        <PieChartComponent data={data} />
      </div>
      <div className="flex-1 flex items-center pl-2">
        <StatisticTable data={data} />
      </div>
    </div>
  </div>
);

export default DevicesByGrade;
