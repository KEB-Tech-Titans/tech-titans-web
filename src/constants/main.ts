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
      '결함종류와 기간별 필터링 검색 기능을 통해 쉽고 빠르게 원하는 정보에 접근 가능',
      '결함상품으로 분류되었던 데이터를 한눈에 확인 가능',
      '데이터에는 결함상품의 결함종류 및 갯수 지표와 결함 심각도를 확인 가능',
      '결함 심각도 = min(Σ[-log₍₍√2₎₎(rᵢ) × Cᵢ], 100) \n \t rᵢ = (Aᵢ / Aₛₘₐᵣₜₚₕₒₙₑ)으로 결함 종류에 따른 스마트폰 면적 대비 결함 면적의 비율이며, \n \t Cᵢ는 결함 종류에 따른 가중치로, oil: 50, stain: 100, scratch: 300 으로 계산되었다.',
    ],
  },
  {
    url: statisticsPageImage,
    alt: '통계확인 페이지 이미지',
    descriptions: [
      '통계 확인',
      '날짜별 통계 데이터 확인 가능(날짜 미선택 시 현재까지 검사한 모든 데이터를 보여줌)',
      '총 검사한 기기 : 해당 날짜에 검사한 기기의 수',
      '전체 불량률 = (불량 발생 기기의 수 / 총 검사 건수) x 100 (단위 : %, 퍼센트)',
      '결함 종류별 퍼센트 : 해당 날짜에 검사한 결함 종류별 비율을 퍼센트로 나타낸 Pie 차트',
      '결함 종류별 갯수 : 해당 날짜에 검사한 결함 종류별 갯수 나타낸 표',
      '날짜별 불량 추이 : 날짜별 불량률과 결함 종류별 갯수를 나타낸 Line 차트',
    ],
  },
];
