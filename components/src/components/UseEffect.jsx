import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function UseEffect() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("UseEffect called");
    document.title = counter;
  }, [counter]);

  return <div>
    <h2>UseEffect Component</h2>
    <h3>Counter: {counter}</h3>
    <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
    <button onClick={() => setCounter(counter - 1)}>Decrement Counter</button>
  </div>;
}

export default UseEffect;
