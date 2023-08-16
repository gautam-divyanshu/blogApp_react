import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import "./css/index.css";

import Router from "./components/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Router />
  </div>
);
