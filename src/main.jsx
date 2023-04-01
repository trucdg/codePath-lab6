import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

<BrowserRouter>
  <Routes>
    <Route index={true} path="/" element={<App />} />
  </Routes>
</BrowserRouter>;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
