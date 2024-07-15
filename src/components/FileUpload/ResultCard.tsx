import { defectInfoType, gradeInfoType } from '../../types/grade';

interface ResultCardProps {
  gradeInfo?: gradeInfoType;
  defectInfo: defectInfoType;
}

const ResultCard = ({ gradeInfo, defectInfo }: ResultCardProps) => {
  return (
    <div className="w-1/2 flex flex-col items-center justify-center p-4">
      {!gradeInfo ? (
        <div>분석을 시작해주세요!</div>
      ) : (
        <div className="bg-white size-[90%] p-4 rounded shadow-xl">
          <h2 className="text-blue-600 text-lg mb-2">{gradeInfo?.grade}등급</h2>
          <p className="mb-4">{gradeInfo?.description}</p>

          <h3 className="text-lg font-semibold mb-2">결함 종류 및 개수</h3>
          <ul className="mb-4">
            <li className="text-purple-500">Oil: {defectInfo.oil}</li>
            <li className="text-green-500">Scratch: {defectInfo.scratch}</li>
            <li className="text-red-500">Stain: {defectInfo.stain}</li>
          </ul>

          <h3 className="text-lg font-semibold">최종 결과</h3>
          <p className="text-green-500 font-bold">양</p>
        </div>
      )}
    </div>
  );
};

export default ResultCard;
