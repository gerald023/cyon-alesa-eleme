import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routes/Router";
import { RouterProvider } from "react-router-dom";
import "../src/../index.css";
// import 'sweetalert2/src/sweetalert2.scss'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
 