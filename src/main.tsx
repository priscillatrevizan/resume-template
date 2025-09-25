import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { DataProvider } from "./features/resume/context";
import "./index.css";
import "./styles/print-fixed.css";

createRoot(document.getElementById("root")!).render(
  <DataProvider>
    <App />
  </DataProvider>
);
