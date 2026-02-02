import React from "react";
import { useId } from "react";

function Item({ name }) {
  const id = useId();
  return (
    <div>
      <span>
        Name: {name} - ID: {id}
      </span>
    </div>
  );
}

const Index = () => {
  const items = ["apple", "Banana", "Mango"];
  return (
    <>
      {items.map((item) => {
        return <Item name={item} key={item}></Item>;
      })}

      <h1>Hello</h1>
    </>
  );
};

export default Index;
