import React from 'react';

interface ProgressBarProps {
  value: number;
  label: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, label }) => (
  <div className="bg-white p-5 rounded-lg shadow">
    <div className="flex flex-col items-center justify-center">
      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div
          className="bg-blue-600 h-4 rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
      <span>{label}</span>
    </div>
  </div>
);

export default ProgressBar;
