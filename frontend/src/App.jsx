import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import FirstPage from "./pages/FirstPage";
import Restaurants from "./pages/Restaurants";
import AllRestaurants from "./pages/AllRestaurants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <FirstPage /> },
      { path: "/restaurants", element: <Restaurants /> },
      {
        path: "/all-restaurants",
        element: <AllRestaurants />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
