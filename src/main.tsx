import React from "react";
import ReactDOM from "react-dom/client";
import Shell from "./layouts/Shell";
import Home from "./pages/Home";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Shell>
      <Home />
    </Shell>
  </React.StrictMode>,
);
