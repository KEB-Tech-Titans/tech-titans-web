import React, { useState, useEffect } from 'react';
import Select, { SingleValue } from 'react-select';

interface DateDropdownProps {
  onDateChange: (year: string | null, month: string | null, day: string | null) => void;
  onReset: () => void;
}

const DateDropdown: React.FC<DateDropdownProps> = ({ onDateChange, onReset }) => {
  const [year, setYear] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [day, setDay] = useState<string>('');

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;

  const handleYearChange = (selectedOption: SingleValue<{ value: string; label: string }>) => {
    const newYear = selectedOption ? selectedOption.value : '';
    setYear(newYear);
    setMonth('');
    setDay('');
  };

  const handleMonthChange = (selectedOption: SingleValue<{ value: string; label: string }>) => {
    const newMonth = selectedOption ? selectedOption.value : '';
    setMonth(newMonth);
    setDay('');
  };

  const handleDayChange = (selectedOption: SingleValue<{ value: string; label: string }>) => {
    const newDay = selectedOption ? selectedOption.value : '';
    setDay(newDay);
  };

  const handleSearch = () => {
    onDateChange(year || null, month || null, day || null);
  };

  const handleReset = () => {
    setYear('');
    setMonth('');
    setDay('');
    onReset();
  };

  const renderOptions = (start: number, end: number) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      const value = i < 10 ? `0${i}` : `${i}`;
      options.push({ value, label: value });
    }
    return options;
  };

  const getValidDays = (year: string, month: string) => {
    const daysInMonth = new Date(parseInt(year), parseInt(month), 0).getDate();
    return renderOptions(1, daysInMonth);
  };

  const years = renderOptions(1992, currentYear);
  const months = year ? renderOptions(1, year === `${currentYear}` ? currentMonth : 12) : [];
  const days = year && month ? getValidDays(year, month) : [];

  const isFutureDate = (selectedYear: string, selectedMonth: string, selectedDay: string) => {
    const selectedDate = new Date(`${selectedYear}-${selectedMonth}-${selectedDay}`);
    return selectedDate > today;
  };

  useEffect(() => {
    if (year && month && day && isFutureDate(year, month, day)) {
      setDay('');
    }
  }, [year, month, day]);

  return (
    <div className="flex space-x-2 items-center justify-end mb-8">
      <Select
        value={years.find(option => option.value === year) || null}
        onChange={handleYearChange}
        options={years}
        placeholder="Year"
        className="react-select-container"
        classNamePrefix="react-select"
      />
      <Select
        value={months.find(option => option.value === month) || null}
        onChange={handleMonthChange}
        options={months}
        placeholder="Month"
        className="react-select-container"
        classNamePrefix="react-select"
        isDisabled={!year}
      />
      <Select
        value={days.find(option => option.value === day) || null}
        onChange={handleDayChange}
        options={days}
        placeholder="Day"
        className="react-select-container"
        classNamePrefix="react-select"
        isDisabled={!year || !month}
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Search
      </button>
      <button
        onClick={handleReset}
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
      >
        Reset
      </button>
    </div>
  );
};

export default DateDropdown;
