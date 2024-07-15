import { lineChartData } from '../../types/statistics';
import LineChartComponent from './LineChart';

interface DefectRateForDateProps {
  data: lineChartData;
}

const DefectRateForDate = ({ data }: DefectRateForDateProps) => {
  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-center text-xl text-gray-800 mb-5">
          <span className="text-gray-800 mr-2">■</span>날짜별 불량률
        </h2>
      </div>
      <div className="bg-white p-5 rounded-lg shadow">
        <div className="flex items-center justify-center">
          <LineChartComponent data={data} />
        </div>
      </div>
    </>
  );
};

export default DefectRateForDate;
