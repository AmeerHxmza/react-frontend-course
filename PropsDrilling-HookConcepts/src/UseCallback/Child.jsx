import React, { useEffect } from "react";

const Child = ({ handleClick, counter1 }) => {
  useEffect(() => {
    console.log("Child Component Rendered");
  }, [handleClick]);
  return (
    <div>
      <p>Child Component is Rerenderring</p>
      <p>Counter 1: {counter1}</p>
    </div>
  );
};

export default Child;
