import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import MainPage from "../pages/MainPage/MainPage";
import StatisticsPage from "../pages/StatisticsPage/StatisticsPage";

const Router = () => (
  <RouterProvider
    router={createBrowserRouter([
      {
        element: <Layout />,
        children: [
          { path: '/', element: <MainPage /> },
          { path: '/3', element: <StatisticsPage /> },
        ],
      },
    ])}
  />
);

export default Router;
