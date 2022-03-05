import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as Context from "./context/DataContext";

ReactDOM.render(
  <Context.DataProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </Context.DataProvider>,
  document.getElementById("root")
);
