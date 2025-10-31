import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css'
import nativLogo from "/nativLogo.png"
import { useState } from "react";

function SignUpNav() {
    const [menuOpen, setMenuOpen] = useState(false)

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
                    <img src={nativLogo} alt="Personal Logo" id="Logo__nav" />
                </Link>
                <ul className={`nav-menu right ${menuOpen ? 'active' : ''}`}>
                    <li className="nav__li center-align">
                    <Link to="/login" className="nav__a center-align yellow-text text-darken-4" onClick={closeMenu}>Login</Link>
                    </li> <li className="nav__li center-align">
                    <Link to="/aboutus" className="nav__a center-align green-text text-darken-4" onClick={closeMenu}>About Us</Link>
                    </li> <li className="nav__li center-align">
                    <Link to="/why-nativ" className="nav__a center-align green-text text-darken-4" onClick={closeMenu}>Why Nativ?</Link>
                    </li> 
                </ul>
                <div
                    className={`burger ${menuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                >
                    <span className="bar green darken-4"></span>
                    <span className="bar green darken-4"></span>
                    <span className="bar green darken-4"></span>
                </div>
                </nav>
            </header>
        )
    }


export default SignUpNav;