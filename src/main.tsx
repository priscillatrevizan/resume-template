import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/print-fixed.css";

createRoot(document.getElementById("root")!).render(<App />);
