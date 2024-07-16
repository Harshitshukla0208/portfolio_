import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AnimatePresence } from "framer-motion";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
      <AnimatePresence mode="wait">
        <App />
      </AnimatePresence>
  );
} else {
  console.error("Failed to find the root element");
}
