import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DynamicUser = () => {
  // console.log(useParams());

  const { id } = useParams();

  const user = [
    { id: 1, name: "John Doe", email: "john@example.com", age: 30 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", age: 25 },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", age: 35 },
    { id: 4, name: "Alice Brown", email: "alice@example.com", age: 28 },
    { id: 5, name: "Charlie Davis", email: "charlie@example.com", age: 40 },
    { id: 6, name: "Ameer Hamza", email: "ameer@gmail.com", age: 22 },
  ];

  const usr = user.find((u) => u.id === parseInt(id));
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {usr?.name}</p>
      <p>Email: {usr?.email}</p>
      <p>Age: {usr?.age}</p>
      {location.pathname === `/user/6` && (
        <h3>
          Welcome Ameer Hamza! You are genius and will become the best developer
          in the world.
        </h3>
      )}

      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
};

export default DynamicUser;
