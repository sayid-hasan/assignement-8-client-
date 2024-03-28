import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Pages/Home";
import Listedbooks from "./Pages/Listedbooks";
import PagestoRead from "./Pages/PagestoRead";
import ErrorPage from "./Pages/ErrorPage";
import BookDetails from "./Components/BookDetails/BookDetails";
import ListedRead from "./Components/ListedRead/ListedRead";
import ListedWishlist from "./Components/ListedWishlist/ListedWishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedbooks",

        element: <Listedbooks></Listedbooks>,
        children: [
          {
            index: true,

            element: <ListedRead></ListedRead>,
          },
          {
            path: "listwishlist",
            element: <ListedWishlist></ListedWishlist>,
          },
        ],
      },
      {
        path: "/pagestoread",
        loader: async () => fetch("blogs.json"),
        element: <PagestoRead></PagestoRead>,
      },
      {
        path: "/:userId",
        loader: async () => fetch("blogs.json"),
        element: <BookDetails></BookDetails>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
