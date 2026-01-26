import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/user");
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/home");
  };

  return (
    <>
      <ul>
        <li>
          {isLoggedIn ? <button onClick={handleLogout}>Logout</button> : null}
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        {isLoggedIn && (
          <>
            <li>
              <Link to="/user">Users</Link>
            </li>
          </>
        )}
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          {!isLoggedIn ? <button onClick={handleLogin}>Login</button> : null}
        </li>
      </ul>
    </>
  );
};

export default Nav;
