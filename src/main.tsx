import React from "react";
import ReactDOM from "react-dom/client";
import Shell from "./layouts/Shell";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "@/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Shell>
      <RouterProvider router={router} />
    </Shell>
  </React.StrictMode>,
);
