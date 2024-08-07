import { useState, useEffect } from 'react';
import DetailProductCard from '../../components/DefectProductDetail/DetailProductCard';
import OptionBar from '../../components/DefectProductDetail/OptionBar';
import { DateValueType } from 'react-tailwindcss-datepicker';
import { fetchDefectProducts } from '../../api/defectProductsApi';
import { defectInfoType } from '../../types/grade';

const PAGE_SIZE = 10;

const DefectProductDetailPage = () => {
  const [value, setValue] = useState<DateValueType>({
    startDate: new Date(), // 기본값 설정
    endDate: new Date(), // 기본값 설정
  });
  const [filter, setFilter] = useState<string>('결함 이유');
  const [data, setData] = useState<defectInfoType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  const handleValueChange = (newValue: DateValueType) => {
    setValue(newValue);
  };

  const clickResetButton = () => {
    setValue(null); // 전체 value를 null로 초기화
    setFilter('결함 이유');
    setCurrentPage(1);
  };

  const handleSearch = async () => {
    try {
      const result = await fetchDefectProducts({
        startDate:
          value?.startDate instanceof Date
            ? value.startDate.toISOString()
            : typeof value?.startDate === 'string'
            ? new Date(value.startDate).toISOString()
            : undefined,
        endDate:
          value?.endDate instanceof Date
            ? value.endDate.toISOString()
            : typeof value?.endDate === 'string'
            ? new Date(value.endDate).toISOString()
            : undefined,
        defectType: filter === '결함 이유' ? undefined : filter,
        limit: PAGE_SIZE,
        offset: (currentPage - 1) * PAGE_SIZE,
      });
      setData(result.data);
    } catch (error) {
      console.error('검색 중 오류 발생:', error);
    }
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    handleSearch();
  }, [currentPage, value, filter]);

  return (
    <div className="p-4">
      <OptionBar
        value={value}
        filter={filter}
        options={['Oil', 'Scratch', 'Stain', 'Black Spot']}
        handleValueChange={handleValueChange}
        handleChange={handleChange}
        clickResetButton={clickResetButton}
        handleSearch={handleSearch}
      />
      <div className="grid grid-cols-2 gap-2">
        {data.map((product) => (
          <DetailProductCard key={product.id} data={product} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
        >
          이전 페이지
        </button>
        <span className="mx-2">페이지 {currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2"
        >
          다음 페이지
        </button>
      </div>
    </div>
  );
};

export default DefectProductDetailPage;
