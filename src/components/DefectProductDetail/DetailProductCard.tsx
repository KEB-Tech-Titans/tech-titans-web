import { defectInfoType, DefectTypeInfo } from '../../types/grade';

const defectColors: { [key: string]: string } = {
  OIL: 'bg-yellow-500',
  SCRATCH: 'bg-red-500',
  STAIN: 'bg-green-500',
  BLACK_SPOT: 'bg-blue-500',
};

const DetailProductCard = ({ data }: { data: defectInfoType }) => {
  return (
    <div className="w-full py-8 border-2 rounded-md items-center flex gap-4 justify-evenly shadow-sm">
      <img
        src={data.analyzedImagePath}
        alt="product"
        className="w-60 rounded-lg"
      />

      <div className="flex flex-col border-r pr-8">
        <p className="font-bold text-xl mb-4">결함 종류 및 개수</p>
        {data.numberOfDefectiveResponseDtoList.map(
          (defect: DefectTypeInfo, index: number) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <div className={`size-4 rounded-full ${defectColors[defect.defectType]}`}></div>
              <p>{`${defect.defectType}: ${defect.number}`}</p>
            </div>
          )
        )}
      </div>
      <div className="flex flex-col items-center gap-4">
        <p className="text-xl font-bold">결함 심각도</p>
        <div className="text-white w-32 h-20 flex place-content-center rounded-xl items-center font-bold text-[40px] text-center bg-blue-600">
          {data.defectSeverity}
        </div>
      </div>
    </div>
  );
};

export default DetailProductCard;
