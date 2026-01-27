import React from "react";
import MoneyContext from "./MoneyContext";

const MoneyState = (props) => {
  const moneyValue = 1000;
  const name = "AMEER HAMZA";
  const [counter, setCounter] = React.useState(0);
  return (
    <>
      <MoneyContext.Provider value={{ moneyValue, name, counter, setCounter }}>
        {props.children}
      </MoneyContext.Provider>
    </>
  );
};

export default MoneyState;
