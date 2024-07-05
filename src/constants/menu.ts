import { PATH } from './path';

interface MenuListType {
  name: string;
  path: string;
}

export const MENU_DATA: MenuListType[] = [
  { name: '검사하기', path: PATH.CHECK },
  { name: '통계 확인하기', path: PATH.STATISTICS },
  { name: '결과 공유/출력하기', path: PATH.MAIN },
];
