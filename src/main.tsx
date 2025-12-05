import { createRoot } from "react-dom/client";
import App from "./App.tsx"; // <- import default
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
