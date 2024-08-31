import Home from "@pages/Home";
import Revenue from "@pages/Revenue";
import { createBrowserRouter, RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/revenue/",
    element: <Revenue />,
  },
];

const router = createBrowserRouter(routes) as ReturnType<
  typeof createBrowserRouter
>;

export default router;
