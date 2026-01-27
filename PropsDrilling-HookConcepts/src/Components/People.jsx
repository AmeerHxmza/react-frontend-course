import React from "react";
import MoneyContext from "../Context/MoneyContext";
import { useContext } from "react";

const People = () => {
  const { moneyValue, name, counter, setCounter } = useContext(MoneyContext);
  console.log(useContext(MoneyContext));
  return (
    <div>
      <h1>People Recieved Money Data</h1>
      <p>Money Value: {moneyValue}</p>
      <p>Name: {name}</p>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
    </div>
  );
};

export default People;
