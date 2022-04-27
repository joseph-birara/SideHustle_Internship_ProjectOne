import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Navbar.css";
import logo from "../../Images/logo.png";
function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="logo" className="logo" /><p className="header">Food Presso</p>
        </NavLink>
        <ul
          className={"nav-links"}>
          <NavLink className="home" to="/"><li>Home</li></NavLink>
          <NavLink className="about" to="/about"><li>About</li></NavLink>
          <NavLink className="products" to="/products"><li>Products</li></NavLink>
          <NavLink className="contact" to="/contact"><li>Contact</li></NavLink>
        </ul>

        
      </nav>
    </>
  );
}

export default Navbar;

