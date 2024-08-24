import React from "react";
import ReactDOM from "react-dom/client";
import Shell from "./layouts/Shell";
import { GlobalProvider } from "./context/globalContext";
import Home from "./pages/Home";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalProvider>
      <Shell>
        <Home />
      </Shell>
    </GlobalProvider>
  </React.StrictMode>,
);
