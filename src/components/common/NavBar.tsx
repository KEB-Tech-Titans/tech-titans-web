import { IoMenuOutline } from 'react-icons/io5';

const NavBar = () => {
  return (
    <header className="bg-white w-full p-4 h-32 flex justify-between items-center">
      <img src="" alt="logo" className="w-64 h-24 object-cover border" />
      <IoMenuOutline className="size-14 relative" />
    </header>
  );
};

export default NavBar;