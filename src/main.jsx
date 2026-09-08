import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "@fontsource/dejavu-serif/latin-400.css";
import "@fontsource/dejavu-serif/latin-700.css";
import App from "./App.jsx";
import "./index.css";
import "./App.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
