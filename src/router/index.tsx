import Home from "@pages/Home";
import Revenue from "@pages/Revenue";
import NotFound from "@pages/NotFound";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import Shell from "@layouts/Shell";

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Shell>
        <Home />
      </Shell>
    ),

    errorElement: <NotFound />,
  },
  {
    path: "/revenue/",
    element: (
      <Shell>
        <Revenue />
      </Shell>
    ),
    errorElement: <NotFound />,
  },
];

const router = createBrowserRouter(routes) as ReturnType<
  typeof createBrowserRouter
>;

export default router;
