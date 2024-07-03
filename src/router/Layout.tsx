import { Outlet } from 'react-router-dom';
import NavBar from '../components/common/NavBar';
import Card from '../components/common/Card';

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className="w-full h-screen grid gap-0">
        <Card>
          <Outlet />
        </Card>
      </main>
    </>
  );
};

export default Layout;
