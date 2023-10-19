import "./index.css";
import React from 'react'
import App from "./App";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import store from "../src/redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
