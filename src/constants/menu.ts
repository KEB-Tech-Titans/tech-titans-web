import { PATH } from './path';

interface MenuListType {
  name: string;
  path: string;
}

export const MENU_DATA: MenuListType[] = [
  { name: '메인페이지', path: PATH.MAIN },
  { name: '결함상품 상세분석', path: PATH.CHECK },
  { name: '통계 확인하기', path: PATH.STATISTICS },
];
