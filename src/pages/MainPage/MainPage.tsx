import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImageSection from '../../components/Main/ImageSection';

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const handleCheckupClick = () => {
    console.log('검사하러 가기 클릭');
    // 필요한 로직 추가
  };

  const handleStatisticsClick = () => {
    navigate('/statistics');
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col mt-4 space-y-8">
        <ImageSection
          imgSrc="/path/to/image1.jpg"
          imgAlt="이미지 1"
          descriptions={[
            '이미지 업로드 및 검사',
            '이미지를 업로드하고 해당 이미지를 Yolo를 통해 인식하여 스마트폰인지 아닌지를 파악한다.',
            '스마트폰이 맞다면, 해당 스마트폰의 스크래치 여부와 정도를 파악하여 등급을 나눈다.',
            '해당 검사결과를 결과 화면으로 보여준다.',
          ]}
        />
        <ImageSection
          imgSrc="/path/to/image2.jpg"
          imgAlt="이미지 2"
          descriptions={[
            '통계 확인',
            '검사를 진행했던 정보를 모아 한눈에 파악하기 쉽도록 통계 수치를 보여준다.',
            '등급별 퍼센트, 날짜별 불량률 확인 등등이 있을 예정',
          ]}
        />
      </div>
      <div className="flex justify-center mt-8">
        <div className="text-center">
          <button
            onClick={handleCheckupClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5 my-2"
          >
            검사하러 가기 →
          </button>
          <button
            onClick={handleStatisticsClick}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-5 my-2"
          >
            통계 확인하러 가기 →
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;