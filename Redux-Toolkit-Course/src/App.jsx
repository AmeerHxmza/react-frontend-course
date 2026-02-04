import React from "react";
import "./App.css";
import { useState } from "react";
import { increaseby1, decreaseby1 } from "./app/counterSlice/CounterSlice";
import { useDispatch, useSelector } from "react-redux";
import Products from "./components/Products";

const App = () => {
  // const counter = useSelector((state) => state.counter);
  // const dispatch = useDispatch();
  return (
    <>
      {/* <h1>{counter}</h1>
      <button onClick={() => dispatch(increaseby1())}>Increase by 1</button>
      <button onClick={() => dispatch(decreaseby1())}>Decrease by 1</button> */}

      <Products />
    </>
  );
};

export default App;
