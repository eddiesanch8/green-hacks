import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useState } from "react";

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
      <nav className="navbar lime lighten-5 linear-gradient">
        <Link to="/" className="headLogo__a" onClick={closeMenu}>
          <img
            src="../src/assets/nativLogo.png"
            alt="Personal Logo"
            id="Logo__nav"
          />
        </Link>
        <ul className={`nav-menu right ${menuOpen ? "active" : ""}`}>
          <li className="nav__li center-align">
            <Link
              to="/login"
              className="nav__a center-align white-text text-darken-4"
              onClick={closeMenu}
            >
              Login
            </Link>
          </li>
          <li className="nav__li center-align">
            <Link
              to="/signup"
              className="nav__a center-align white-text text-darken-4"
              onClick={closeMenu}
            >
              Sign Up
            </Link>
          </li>
          <li className="nav__li center-align">
            <Link
              to="/aboutus"
              className="nav__a center-align white-text text-darken-4"
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
          <span className="bar green darken-4"></span>
          <span className="bar green darken-4"></span>
          <span className="bar green darken-4"></span>
        </div>
      </nav>
    </header>
  );
}

export default NoLogNav;
