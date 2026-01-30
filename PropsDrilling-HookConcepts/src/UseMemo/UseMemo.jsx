import React from "react";
import { useState, useMemo } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(10);

  //complex function runs every time
  const complexFunction = useMemo(() => {
    for (let i = 0; i < 1000; i++) {
      console.log("Calculating...");
    }
    return num * 2;
  }, [num]);

  const result = complexFunction;

  return (
    <>
      <h2>Result = {result}</h2>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
      <button onClick={() => setNum(num + 1)}>Num - {num}</button>
    </>
  );
};

export default UseMemo;
