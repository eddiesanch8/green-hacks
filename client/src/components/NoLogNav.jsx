import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useState } from "react";
import nativLogo from "/nativLogo.png";

function NoLogNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="headLogo__a" onClick={closeMenu}>
          <img src={nativLogo} alt="Personal Logo" id="Logo__nav" />
        </Link>
        <ul className={`nav-menu right ${menuOpen ? "active" : ""}`}>
          <li className="nav__li">
            <Link
              to="/login"
              className="nav__a center-align"
              onClick={closeMenu}
            >
              Login
            </Link>
          </li>
          <li className="nav__li center-align">
            <Link
              to="/signup"
              className="nav__a center-align"
              onClick={closeMenu}
            >
              Sign Up
            </Link>
          </li>
          <li className="nav__li center-align">
            <Link
              to="/aboutus"
              className="nav__a center-align"
              onClick={closeMenu}
            >
              About Us
            </Link>
          </li>
        </ul>
        <div
          className={`burger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}

export default NoLogNav;
