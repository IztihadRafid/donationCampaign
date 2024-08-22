import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import CategoryDetails from "./Components/CategoryDetails/CategoryDetails.jsx";
import Donations from "./Components/Donations/Donations.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:'/donation',
        element:<Donations></Donations>
      },
      {
        path:'/categorydetail/:id',
        element:<CategoryDetails></CategoryDetails>,
        loader:()=> fetch('jsons.json')
      }
    ]

  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
