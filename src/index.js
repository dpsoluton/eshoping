import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductContext } from "./dataContext/Context";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductContext>
);
