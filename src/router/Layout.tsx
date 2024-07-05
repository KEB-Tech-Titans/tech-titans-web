import { Outlet } from 'react-router-dom';
import NavBar from '../components/common/NavBar';
import Card from '../components/common/Card';

const Layout: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className="w-full h-screen grid gap-0">
        <Card>
          <div className="scrollable-container">
            <Outlet />
          </div>
        </Card>
      </main>
    </>
  );
};

export default Layout;
