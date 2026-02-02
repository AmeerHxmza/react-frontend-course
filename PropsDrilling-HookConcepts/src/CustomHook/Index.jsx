import React from "react";
import { useFetch } from "./useFetch";

const Index = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos",
  );
  console.log("Data Fetching from Custome Hook", data);
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error</p>;
  return (
    <div>
      <h1>Data Fetched from the API</h1>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default Index;
