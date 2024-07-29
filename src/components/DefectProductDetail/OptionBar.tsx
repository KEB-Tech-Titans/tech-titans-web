import Datepicker, { DateValueType } from 'react-tailwindcss-datepicker';

interface OptionBarProps {
  value: DateValueType;
  filter: string;
  options: string[];
  handleValueChange: (newValue: DateValueType) => void;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  clickResetButton: () => void;
}

const OptionBar = ({
  value,
  filter,
  options,
  handleValueChange,
  handleChange,
  clickResetButton,
}: OptionBarProps) => {
  return (
    <div className="flex justify-between items-center pb-4">
      <div className="flex gap-2 items-center">
        <Datepicker
          primaryColor={'blue'}
          showShortcuts={true}
          value={value}
          onChange={handleValueChange}
        />

        <select
          className="appearance-none text-lg font-semibold text-blue-500 px-3 w-52 h-11 rounded-md border-2 border-blue-400"
          value={filter === '결함 이유' ? '' : filter}
          onChange={handleChange}
        >
          <option value="" disabled hidden>
            결함 이유
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <button className="w-40 h-11 text-white font-semibold bg-blue-600 rounded-md hover:bg-white hover:text-blue-500 hover:border-2 border-blue-500">
          검색 시작
        </button>
      </div>

      <button
        onClick={clickResetButton}
        className="w-40 h-11  font-semibold border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white"
      >
        초기화
      </button>
    </div>
  );
};

export default OptionBar;
