import Home from "@pages/Home";
import CashFlow from "@pages/CashFlow";
import { createBrowserRouter, RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cash-flow/",
    element: <CashFlow />,
  },
];

const router = createBrowserRouter(routes) as ReturnType<
  typeof createBrowserRouter
>;

export default router;
