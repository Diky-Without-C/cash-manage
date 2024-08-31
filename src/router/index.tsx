import Home from "@pages/Home";
import Revenue from "@pages/Revenue";
import NotFound from "@pages/NotFound";
import { createBrowserRouter, RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/revenue/",
    element: <Revenue />,
    errorElement: <NotFound />,
  },
];

const router = createBrowserRouter(routes) as ReturnType<
  typeof createBrowserRouter
>;

export default router;
