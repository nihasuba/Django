import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h1>Task Manager</h1>
      </div>
      <ul className={`navbar__links ${menuOpen ? "active" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        {/* <li><a href="/login">Login</a></li> */}
        <button className="loginbutton" ><a href="/login">Login</a></button>
      </ul>
      
    </nav>
  );
};

export default Navbar;
