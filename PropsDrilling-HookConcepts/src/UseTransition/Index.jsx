import React from "react";
import { useState, useTransition } from "react";

const Index = () => {
  const [text, settext] = useState("");
  const [list, setlist] = useState([]);
  const [pending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    settext(value);

    startTransition(() => {
      const newList = [];
      for (let i = 0; i <= 50000; i++) {
        newList.push(`${value} => ${i}`);
      }
      setlist(newList);
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="type here"
        value={text}
        onChange={handleChange}
      />
      {pending && <p>Loading ...</p>}
      <ul>
        {list.map((item, index) => (
          <li key={index}> {item} </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
