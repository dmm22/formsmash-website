import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AnalyticsProvider } from "./contexts/AnalyticsContext";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AnalyticsProvider>
        <App />
      </AnalyticsProvider>
    </BrowserRouter>
  </StrictMode>,
);
