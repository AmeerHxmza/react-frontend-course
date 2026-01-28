import React, { useReducer } from "react";



const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <>
      <h1>useReducer Hook Example</h1>
      <p>Count: {state.count}</p>

      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>

      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default UseReducer;
