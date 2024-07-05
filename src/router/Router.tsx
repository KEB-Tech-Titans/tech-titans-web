import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import MainPage from '../pages/MainPage/MainPage';
import StatisticsPage from '../pages/StatisticsPage/StatisticsPage.tsx';
import { PATH } from '../constants/path.ts';

const Router = () => (
  <RouterProvider
    router={createBrowserRouter([
      {
        element: <Layout />,
        children: [
          { path: PATH.MAIN, element: <MainPage /> },
          { path: PATH.STATISTICS, element: <StatisticsPage /> },
        ],
      },
    ])}
  />
);

export default Router;
