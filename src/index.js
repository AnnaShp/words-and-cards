import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { WordContextProvider } from "./components/Context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WordContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </WordContextProvider>
);
