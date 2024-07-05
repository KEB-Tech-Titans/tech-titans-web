import { Outlet } from 'react-router-dom';
import NavBar from '../components/common/NavBar';
import Card from '../components/common/Card';
import '../styles/index.css';

const Layout: React.FC = () => {
  return (
    <>
      <main className="w-full h-screen grid gap-0">
        <NavBar />
        <Card>
          <div className="scrollable-container scrollbar-hide">
            <Outlet />
          </div>
        </Card>
      </main>
    </>
  );
};

export default Layout;
