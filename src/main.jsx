import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Certifique-se de que o caminho para o elemento com id "root" está correto
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
