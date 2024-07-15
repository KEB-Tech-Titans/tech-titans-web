import { useState } from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import MenuList from './MenuList';
import Logo from '/logo.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="px-48 relative w-full py-4 h-32 flex justify-between items-center z-50"> {/* z-50을 추가하여 가장 앞에 오도록 설정 */}
      <img src={Logo} alt="logo" className="w-96 h-24 object-cover border" />
      <button onClick={handleOpenMenu}>
        <IoMenuOutline className="size-14 relative" />
      </button>

      {isOpen && <MenuList onClose={closeMenu} />}
    </header>
  );
};

export default NavBar;
