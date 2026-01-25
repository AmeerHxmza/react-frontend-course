import React from "react";
import { useEffect } from "react";

function FetchData() {
  const [apiData, setApiData] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await api.json();
      console.log(data);
      setApiData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>API Data</h1>
      {apiData.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            borderRadius: "15px",
            padding: "10px",
            boxShadow: "5px 5px 10px grey",
            backgroundColor: "#6c2016",
          }}
        >
          <h2>Title: {item.title}</h2>
          <p>ID: {item.id}</p>
          <p>Completed: {item.completed ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
}

export default FetchData;
