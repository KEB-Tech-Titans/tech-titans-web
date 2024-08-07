import { defectProductData } from '../../mocks/defectProduct';
import DetailProductCard from '../../components/DefectProductDetail/DetailProductCard';
import OptionBar from '../../components/DefectProductDetail/OptionBar';
import { useState } from 'react';
import { DateValueType } from 'react-tailwindcss-datepicker';

const DefectProductDetailPage = () => {
  const [value, setValue] = useState<DateValueType>({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [filter, setFilter] = useState('결함 이유');
  const options = ['Oil', 'Scratch', 'Stain', 'Black Spot'];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  const handleValueChange = (newValue: DateValueType) => {
    setValue(newValue);
  };

  const clickResetButton = () => {
    setValue({ startDate: null, endDate: null });
    setFilter('결함 이유');
  };

  return (
    <div className="p-4">
      <OptionBar
        value={value}
        filter={filter}
        options={options}
        handleValueChange={handleValueChange}
        handleChange={handleChange}
        clickResetButton={clickResetButton}
      />
      <div className="grid grid-cols-2 gap-2">
        {defectProductData.map((product) => (
          <DetailProductCard data={product} />
        ))}
      </div>
    </div>
  );
};

export default DefectProductDetailPage;
