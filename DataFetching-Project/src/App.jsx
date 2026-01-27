import React, { Children } from "react";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Products from "./Pages/Products.jsx";
import Profile from "./Pages/Profile.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "profile", element: <Profile />, loader: githubProfileLoader },
    ],
  },
]);

async function githubProfileLoader() {
  const response = await fetch("https://api.github.com/users/AmeerHxmza");
  if (!response.ok) {
    throw new Error("Failed to fetch profile data");
  }
  const data = await response.json();
  return data;
}

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
