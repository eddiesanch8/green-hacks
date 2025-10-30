import React from "react";
import { Link } from "react-router-dom";
import '../styles/headFoot.css'
import nativLogo from "/nativLogo.png"

function Footer() {

    return (
        <footer>
            <div>
                <img src={nativLogo} alt="Personal Logo" id="Logo__nav" />
                <p className="green-text text-darken-3">With Nativ, we try our best to help others improve the environment, one planted seed at a time!</p>
            </div>
            <div>
                <ul>
                    <li className="green-text text-darken-3"><Link to="/"/>Home</li>
                    <li className="green-text text-darken-3"><Link to="/"/>Survey</li>
                    <li className="green-text text-darken-3"><Link to="/"/>About Us</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;