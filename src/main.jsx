import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Layout from "../routes/Layout";
import DetailView from "../routes/DetailView";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      {
        path: "/coinDetails/:symbol",
        element: <DetailView />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
