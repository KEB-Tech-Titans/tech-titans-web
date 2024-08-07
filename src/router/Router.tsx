import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import MainPage from '../pages/MainPage/MainPage';
import StatisticsPage from '../pages/StatisticsPage/StatisticsPage.tsx';
import { PATH } from '../constants/path.ts';
import DefectProductDetailPage from '../pages/DefectProductDetailPage/DefectProductDetailPage.tsx';

const Router = () => (
  <RouterProvider
    router={createBrowserRouter([
      {
        element: <Layout />,
        children: [
          { path: PATH.MAIN, element: <MainPage /> },
          { path: PATH.STATISTICS, element: <StatisticsPage /> },
          { path: PATH.CHECK, element: <DefectProductDetailPage /> },
        ],
      },
    ])}
  />
);

export default Router;
