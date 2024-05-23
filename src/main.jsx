import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Beranda from "./pages/Beranda";
import Paket from "./pages/Paket";
import Kontak from "./pages/Kontak";
import Tentang from "./pages/Tentang";
import ErrorPage from "./pages/404";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Beranda />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/beranda",
    element: <Beranda />,
  },
  {
    path: "/paket",
    element: <Paket />,
  },
  {
    path: "/kontak",
    element: <Kontak />,
  },
  {
    path: "/tentang",
    element: <Tentang />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
