import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <>
      <h1>Welcome to Product Component</h1>
      <div>
        <h2>Product List</h2>
        <nav>
          <Link to="/phones">Phones</Link>
          <Link to="/laptops">Laptops</Link>
          <Link to="/tablets">Tablets</Link>
        </nav>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Product;

function Phones() {
  return <h2>Phones Category</h2>;
}

function Laptops() {
  return <h2>Laptops Category</h2>;
}

function Tablets() {
  return <h2>Tablets Category</h2>;
}
export { Phones, Laptops, Tablets };
