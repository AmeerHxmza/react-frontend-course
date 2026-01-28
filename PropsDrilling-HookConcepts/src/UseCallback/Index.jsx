import React from "react";
import Child from "./Child.jsx";
import { useState, useCallback } from "react";

const Index = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const handleClick = useCallback(() => {
    setCounter1(counter1 + 1);
  }, [counter1]);

  // const handleClick=()=>setCounter1(counter1 + 1);

  return (
    <div>
      <h1>useCallback Hook Example</h1>
      <p>Counter 2: {counter2}</p>
      <button onClick={() => setCounter2(counter2 + 1)}>
        Increment Counter 1
      </button>
      <Child handleClick={handleClick} counter1={counter1}></Child>
    </div>
  );
};

export default Index;
