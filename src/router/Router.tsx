import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import MainPage from "../pages/MainPage/MainPage";
import StatisticsPage from "../pages/StatisticsPage/StatisticsPage.tsx";

const Router = () => (
  <RouterProvider
    router={createBrowserRouter([
      {
        element: <Layout />,
        children: [
          { path: '/', element: <MainPage /> },
          { path: '/statistics', element: <StatisticsPage /> },
        ],
      },
    ])}
  />
);

export default Router;
