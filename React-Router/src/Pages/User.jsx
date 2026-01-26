import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  const user = [
    { id: 1, name: "John Doe", email: "john@example.com", age: 30 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", age: 25 },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", age: 35 },
    { id: 4, name: "Alice Brown", email: "alice@example.com", age: 28 },
    { id: 5, name: "Charlie Davis", email: "charlie@example.com", age: 40 },
    { id: 6, name: "Ameer Hamza", email: "ameer@gmail.com", age: 22 },
  ];

  return (
    <>
      {user.map((usr) => (
        <div
          key={usr.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <Link to={`/user/${usr.id}`}><h2>{usr.name}</h2></Link>
        </div>
      ))}
    </>
  );
};

export default User;
