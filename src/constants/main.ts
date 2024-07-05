import uploadImage from '/upload.png';

interface ImageSectionDataType {
  url: string;
  alt: string;
  descriptions: string[];
}

export const IMAGE_SECTION_DATA: ImageSectionDataType[] = [
  {
    url: uploadImage,
    alt: '이미지 1',
    descriptions: [
      '이미지 업로드 및 검사',
      '이미지를 업로드하고 해당 이미지를 Yolo를 통해 인식하여 스마트폰인지 아닌지를 파악한다.',
      '스마트폰이 맞다면, 해당 스마트폰의 스크래치 여부와 정도를 파악하여 등급을 나눈다.',
      '해당 검사결과를 결과 화면으로 보여준다.',
    ],
  },
  {
    url: uploadImage,
    alt: '이미지 2',
    descriptions: [
      '통계 확인',
      '검사를 진행했던 정보를 모아 한눈에 파악하기 쉽도록 통계 수치를 보여준다.',
      '등급별 퍼센트, 날짜별 불량률 확인 등등이 있을 예정',
    ],
  },
];
