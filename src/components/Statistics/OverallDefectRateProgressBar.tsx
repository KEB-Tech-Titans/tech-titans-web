import React from 'react';
import { overallDefectRateDataType } from '../../types/statistics';
import ProgressBar from './ProgressBar';

interface OverallDefectRateProgressBarProps {
  data: overallDefectRateDataType[];
  totalDefects: number;
}

const OverallDefectRateProgressBar: React.FC<OverallDefectRateProgressBarProps> = ({ data, totalDefects }) => {
  if (!data || data.length === 0) {
    return (
      <div className="text-center mb-8">
        <h2 className="text-xl text-gray-800 mb-5">
          <span className="text-gray-800 mr-2">■</span> 전체적인 불량률
        </h2>
        <div className="bg-white p-5 rounded-lg shadow">
          <div className="flex flex-col items-center justify-center">
            <span>No data available</span>
          </div>
        </div>
      </div>
    );
  }

  const latestData = data[data.length - 1];

  return (
    <div className="text-center mb-8">
      <h2 className="text-xl text-gray-800 mb-5">
        <span className="text-gray-800 mr-2">■</span> 전체적인 불량률
      </h2>
      <ProgressBar 
        value={latestData.defectRate} 
        label={`Defect Rate: ${latestData.defectRate.toFixed(2)}% (Total Defective Devices: ${totalDefects})`} 
      />
    </div>
  );
};

export default OverallDefectRateProgressBar;
