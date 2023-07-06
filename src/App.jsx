import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";

import Graphics from "./pages/graphics/index";

function App() {
  const Layout = () => {
    
    return (
      <div className="app">
        <Navbar/>
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/graphics",
          element: <Graphics />,
        },
      ],
    }

  ]);

  return <RouterProvider router={router} />;
}

export default App;
