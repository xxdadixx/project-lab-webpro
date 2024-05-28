import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import CRUDClass from "../components/CRUDClass";
import CRUDClassEdit from "../components/CRUDClassEdit";
import Portfolio from "../components/Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/crudclass",
    element: <CRUDClass />,
  },
  {
    path: "/crudclassedit/:id",
    element: <CRUDClassEdit />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
