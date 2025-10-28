import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../styles/headFoot.css'
import nativLogo from "/nativLogo.png"

class Header extends Component {
    state = { menuOpen: false };

    closeMenu = () => {
        this.setState({ menuOpen: false });
    };

    toggleMenu = () => {
        this.setState({ menuOpen: !this.state.menuOpen });
    };

    render() {
        const { menuOpen } = this.state;
        return (
            <header className="header">
                <nav className="navbar lime lighten-5">
                <Link to="/" className="headLogo__a" onClick={this.closeMenu}>
                    <img src={nativLogo} alt="Personal Logo" id="Logo__nav" />
                </Link>
                <ul className={`nav-menu right ${menuOpen ? 'active' : ''}`}>
                    <li className="nav__li center-align">
                    <Link to="/login" className="nav__a center-align green-text text-darken-4" onClick={this.closeMenu}>Login</Link>
                    </li> <li className="nav__li center-align">
                    <Link to="/signup" className="nav__a center-align green-text text-darken-4" onClick={this.closeMenu}>Sign Up</Link>
                    </li> 
                </ul>
                <div
                    className={`burger ${menuOpen ? 'active' : ''}`}
                    onClick={this.toggleMenu}
                >
                    <span className="bar green darken-4"></span>
                    <span className="bar green darken-4"></span>
                    <span className="bar green darken-4"></span>
                </div>
                </nav>
            </header>
        )
    }
}

export default Header;