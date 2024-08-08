import { useState, useEffect } from 'react';
import DetailProductCard from '../../components/DefectProductDetail/DetailProductCard';
import OptionBar from '../../components/DefectProductDetail/OptionBar';
import { DateValueType } from 'react-tailwindcss-datepicker';
import { fetchDefectProducts } from '../../api/defectProductsApi';
import { defectInfoType } from '../../types/grade';

const PAGE_SIZE = 10;

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const DefectProductDetailPage = () => {
  const [value, setValue] = useState<DateValueType>({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [filter, setFilter] = useState<string>('결함 이유');
  const [data, setData] = useState<defectInfoType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  const handleValueChange = (newValue: DateValueType) => {
    setValue(newValue);
  };

  const clickResetButton = () => {
    setValue(null);
    setFilter('결함 이유');
    setCurrentPage(0);
  };

  const handleSearch = async () => {
    try {
      const result = await fetchDefectProducts({
        startDate:
          value?.startDate instanceof Date
            ? formatDate(value.startDate)
            : typeof value?.startDate === 'string'
            ? formatDate(new Date(value.startDate))
            : undefined,
        endDate:
          value?.endDate instanceof Date
            ? formatDate(value.endDate)
            : typeof value?.endDate === 'string'
            ? formatDate(new Date(value.endDate))
            : undefined,
        defectType: filter === '결함 이유' ? undefined : filter.toUpperCase(),
        limit: PAGE_SIZE,
        offset: currentPage,
      });

      console.log('API response:', result);

      setData(result.data.content);
      setCurrentPage(result.data.page);
      setTotalPages(result.data.totalPages);
    } catch (error) {
      console.error('검색 중 오류 발생:', error);
    }
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 0 && newPage < totalPages) {
      setCurrentPage(newPage);
    }
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
          <DetailProductCard key={product.analyzedFileName} data={product} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          disabled={currentPage === 0}
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
        >
          이전 페이지
        </button>
        <span className="mx-2">
          페이지 {currentPage + 1} / {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages - 1}
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
