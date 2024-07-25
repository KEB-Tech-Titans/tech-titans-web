import defectDetailsPageImage from '/defectDetailsPage.png';
import statisticsPageImage from '/statisticsPage.png';
interface ImageSectionDataType {
  url: string;
  alt: string;
  descriptions: string[];
}

export const IMAGE_SECTION_DATA: ImageSectionDataType[] = [
  {
    url: defectDetailsPageImage,
    alt: '결함상품 상세확인 페이지 이미지',
    descriptions: [
      '결함상품 상세확인',
      '결함종류와 날짜별 필터링 검색 기능을 통해 쉽고 빠르게 원하는 정보에 접근 가능',
      '결함상품으로 분류되었던 데이터를 한눈에 확인 가능',
      '데이터에는 결함상품의 결함종류 및 갯수 지표와 결함 심각도를 확인 가능',
      '결함 심각도 = log{(인식된 결함 영역의 넓이 / 전체 핸드폰 액정 영역의 넓이) x 100}',
    ],
  },
  {
    url: statisticsPageImage,
    alt: '통계확인 페이지 이미지',
    descriptions: [
      '통계 확인',
      '전체 불량률 = (불량 발생 건수 / 총 검사 건수) x 100 (단위 : %, 퍼센트)',
      '결함 종류별 퍼센트 : 결함 종류별 비율을 퍼센트로 나타낸 Pie 차트',
      '날짜별 불량 추이 : 날짜별 총 불량 퍼센트와 결함 종류별 퍼센트를 나타낸 차트',
    ],
  },
];
