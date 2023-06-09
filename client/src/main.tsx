import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./app/Router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
