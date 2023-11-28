import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "mobx-react";
import CardStores from "./stores/CardStore";

const stores = {
  cardStore: new CardStores(),
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider {...stores}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
