import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerLeftCol">
          <img
            src="../src/assets/nativLogo.png"
            alt="Personal Logo"
            id="Logo__footer"
          />
          <p>
            With Nativ, we push to help others improve the environment, one planted seed at a time!
          </p>
          <div className="Socials">
            <img src="../src/assets/instagram.webp" alt="Instagram" />
            <img src="../src/assets/linkedin.webp" alt="LinkedIn" />
            <img src="../src/assets/tiktok.webp" alt="TikTok" />
          </div>
        </div>

        <div className="footerRightCol">
          <ul className="footer__ul-home">
            <li
              className="footerLinkHead"
              style={{ textDecoration: "underline" }}
            >
              Links
            </li>
            <li className="footerLinks">
              <Link to="/">
                Home
              </Link>
            </li>
            <li className="footerLinks">
              <Link to="/login">
                Log In
              </Link>
            </li>
            <li className="footerLinks">
              <Link to="/signup">
                Sign Up
              </Link>
            </li>
            <li className="footerLinks">
              <Link to="/aboutus">
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
