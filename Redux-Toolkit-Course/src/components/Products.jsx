import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../app/cartSlice/Index";
import "./Product.css";

const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart.products);
  const cart = useSelector((state) => state.cart.cart);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛒 Shopping Cart</h1>

      {/* PRODUCTS */}
      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* CART */}
      <div className="cart">
        <h2>Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div className="cart-items" key={item.id}>
                <span>{item.name}</span>
                <span>${item.price}</span>
                <button
                  className="remove-btn"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="cart-total">
              <span>Total Items:</span>
              {cart.length}
              <strong>Total Price: ${totalPrice}</strong>
              <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
