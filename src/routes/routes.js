import { config } from "config";
import HomePage from "features/Product/pages/HomePage/HomePage";
import ListPage from "features/Product/pages/ListPage/ListPage";

export const routes = [
  {
    component: <HomePage />,
    path: config.routes.home,
  },
  {
    component: <ListPage />,
    path: config.routes.list,
  },
];
