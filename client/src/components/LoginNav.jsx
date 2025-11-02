import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useState } from "react";

function LoginNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <nav className="navbar lime lighten-5">
        <Link to="/" className="headLogo__a" onClick={closeMenu}>
          <img src="/nativLogo.png" alt="Personal Logo" id="Logo__nav" />
        </Link>
        <ul className={`nav-menu right ${menuOpen ? "active" : ""}`}>
          <li className="nav__li center-align">
            <Link
              to="/signup"
              className="nav__a center-align yellow-text text-darken-4"
              onClick={closeMenu}
            >
              SignUp
            </Link>
          </li>
          <li className="nav__li center-align">
            <Link
              to="/aboutus"
              className="nav__a center-align green-text text-darken-4"
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

export default LoginNav;
