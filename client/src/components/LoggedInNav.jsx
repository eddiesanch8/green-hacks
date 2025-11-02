import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useState } from "react";

function LoggedInNav() {
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
          <img
            src="../src/assets/nativLogo.png"
            alt="Personal Logo"
            id="Logo__nav"
          />
        </Link>
        <ul className={`nav-menu right ${menuOpen ? "active" : ""}`}>
          <li className="nav__li center-align">
            <Link
              to="/search"
              className="nav__a center-align"
              onClick={closeMenu}
            >
              Sprout Finder
            </Link>
          </li>
          <li className="nav__li center-align">
            <Link
              to="/favorites"
              className="nav__a center-align"
              onClick={closeMenu}
            >
              Favorites
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

export default LoggedInNav;
