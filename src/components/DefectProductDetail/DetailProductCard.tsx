import { defectInfoType } from '../../types/grade';

const DetailProductCard = ({ data }: { data: defectInfoType }) => {
  return (
    <div className="w-full py-8 border-2 rounded-md items-center flex gap-4 justify-evenly shadow-sm">
      <img src={data.url} alt="product" className="w-60 rounded-lg" />

      <div className="flex flex-col border-r pr-8">
        <p className="font-bold text-xl mb-4">결함 종류 및 개수</p>
        <div className="flex items-center gap-2">
          <div className="size-4 rounded-full bg-violet-600"></div>
          <p>Oil: {data.oil}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-4 rounded-full bg-green-600"></div>
          <p>Scratch: {data.scratch}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-4 rounded-full bg-red-600"></div>
          <p>Stain: {data.stain}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <p className="text-xl font-bold">결함 심각도</p>
        <div className="text-white w-32 h-20 flex place-content-center rounded-xl items-center font-bold text-[40px] text-center bg-blue-600">
          {data.severity}
        </div>
      </div>
    </div>
  );
};

export default DetailProductCard;
