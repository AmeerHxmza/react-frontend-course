import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import User from "./Pages/User";
import DynamicUser from "./Pages/DynamicUser";
import Nav from "./Pages/Nav";

const App = () => {
  return (
    <>
      <Router>
        {/* <Navbar></Navbar> */}
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/:id" element={<DynamicUser />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
