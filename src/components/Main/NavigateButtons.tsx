import { Link } from 'react-router-dom';
import { PATH } from '../../constants/path';

const NavigateButtons = () => {
  return (
    <div className="flex justify-center mt-8">
      <Link
        to={PATH.CHECK}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5 my-2"
      >
        검사하러 가기 →
      </Link>
      <Link
        to={PATH.STATISTICS}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-5 my-2"
      >
        통계 확인하러 가기 →
      </Link>
    </div>
  );
};

export default NavigateButtons;
