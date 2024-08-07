import { Link } from 'react-router-dom';
import { PATH } from '../../constants/path';

const NavigateButtons = () => {
  return (
    <div className="flex justify-center mt-8">
      <Link
        to={PATH.CHECK}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5 my-2"
      >
        결함상품 상세분석 확인 →
      </Link>
      <Link
        to={PATH.STATISTICS}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-5 my-2"
      >
        통계 확인 →
      </Link>
    </div>
  );
};

export default NavigateButtons;
