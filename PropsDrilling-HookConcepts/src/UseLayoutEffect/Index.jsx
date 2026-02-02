import React, { useState } from "react";
import { useLayoutEffect } from "react";

const Index = () => {
  const [color, setColor] = useState("lightblue");

  useLayoutEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Current Background {color}</h2>
      <button onClick={() => setColor("lightcoral")}>Red</button>
      <button onClick={() => setColor("lightblue")}>Blue</button>
      <button onClick={() => setColor("lightgreen")}>Green</button>
    </div>
  );
};

export default Index;
