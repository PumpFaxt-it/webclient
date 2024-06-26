import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <main className="saturate-[110%] contrast-[110%]">
      <App />
    </main>
  </React.StrictMode>
);
