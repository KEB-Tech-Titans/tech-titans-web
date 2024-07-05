import { Link } from 'react-router-dom';
import { MENU_DATA } from '../../constants/menu';

interface MenuListProps {
  onClose: () => void;
}

const MenuList = ({ onClose }: MenuListProps) => {
  return (
    <div className="absolute p-8 size-52 rounded-lg text-end bg-white shadow-2xl right-44 top-24 border flex flex-col justify-between gap-2 text-lg font-bold">
      {MENU_DATA.map((menu, index) => (
        <Link key={index} to={menu.path} onClick={onClose}>
          {menu.name}
        </Link>
      ))}
    </div>
  );
};

export default MenuList;
