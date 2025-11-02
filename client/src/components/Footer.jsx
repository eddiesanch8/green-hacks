import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footerContainer linear-gradient">
        <div className="footerLeftCol">
          <img
            src="../src/assets/nativLogo.png"
            alt="Personal Logo"
            id="Logo__nav"
          />
          <p className="white-text text-darken-3">
            With Nativ, we try our best to help others improve the environment,
            one planted seed at a time!
          </p>
          <div className="Socials">
            <img src="../src/assets/instagram.png" alt="Instagram" />
            <img src="../src/assets/linkedin.png" alt="LinkedIn" />
            <img src="../src/assets/tiktok.png" alt="TikTok" />
          </div>
        </div>

        <div className="footerRightCol">
          <ul>
            <li
              className="footerLinkHead text-darken-4"
              style={{ textDecoration: "underline" }}
            >
              Links
            </li>
            <li className="footerLinks">
              <Link to="/" className="white-text text-darken-1">
                Home
              </Link>
            </li>
            <li className="footerLinks">
              <Link to="/signup" className="white-text text-darken-1">
                Signup
              </Link>
            </li>
            <li className="footerLinks">
              <Link to="/" className="white-text text-darken-1">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
