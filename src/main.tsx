import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { DataProvider } from "./context/DataContext";
import "./index.css";
import "./styles/print-fixed.css";

createRoot(document.getElementById("root")!).render(
  <DataProvider>
    <App />
  </DataProvider>
);
