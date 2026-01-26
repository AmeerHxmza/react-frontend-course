import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Product";
import Phones from "./Pages/Phones";
import Laptop from "./Pages/Laptop";
import Tablets from "./Pages/Tablets";

const Index = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />}>
              <Route path="phones" element={<Phones />} />
              <Route path="laptops" element={<Laptop />} />
              <Route path="tablets" element={<Tablets />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default Index;
