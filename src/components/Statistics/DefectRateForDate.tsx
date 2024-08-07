import { lineChartData } from '../../types/statistics';
import LineChartComponent from './LineChart';
import DefectRateChartComponent from './DefectRateLineChart';

interface DefectRateForDateProps {
  data: lineChartData;
}

// DefectRateChartData 형식을 정의합니다.
interface DefectRateChartData {
  date: string;
  defectRate: number;
}

// 데이터 변환 함수 (재사용)
const transformDataToDefectRate = (data: lineChartData): DefectRateChartData[] => {
  return data
    .filter(item => item.defectRate !== undefined)
    .map(item => ({
      date: item.date,
      defectRate: item.defectRate as number,
    }));
};

const DefectRateForDate = ({ data }: DefectRateForDateProps) => {
  const defectRateData = transformDataToDefectRate(data);

  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-center text-xl text-gray-800 mb-5">
          <span className="text-gray-800 mr-2">■</span>날짜별 불량추이
        </h2>
      </div>
      <div className="bg-white p-5 rounded-lg shadow">
        <div className="flex items-center justify-center mb-12">
          <DefectRateChartComponent data={defectRateData} />
        </div>
        <div className="flex items-center justify-center">
          <LineChartComponent data={data} />
        </div>
      </div>
    </>
  );
};

export default DefectRateForDate;
