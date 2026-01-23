import React from "react";

const Product = ({ data }) => {
  return (
    <div>
      {data.map((product, index) => (
        <div key={index}>
          <h1>Brand : {product.name}</h1>
          <h3>Price: ${product.price}</h3>
          <p>Color: {product.color}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Product;
