import React from "react";
import logo from "../assets/hamburgerlogo.jpg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="leftSide">
        <img src={logo} />
      </div>
      <div className="rightSide">
        <Link to="">Home123</Link>
        <Link to="/menu"> Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
