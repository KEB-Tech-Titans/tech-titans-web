import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import MainPage from '../pages/MainPage/MainPage';
import StatisticsPage from '../pages/StatisticsPage/StatisticsPage.tsx';
import { PATH } from '../constants/path.ts';
import FileUploadPage from '../pages/FileUploadPage/FileUploadPage.tsx';

const Router = () => (
  <RouterProvider
    router={createBrowserRouter([
      {
        element: <Layout />,
        children: [
          { path: PATH.MAIN, element: <MainPage /> },
          { path: PATH.STATISTICS, element: <StatisticsPage /> },
          { path: PATH.CHECK, element: <FileUploadPage /> },
        ],
      },
    ])}
  />
);

export default Router;
