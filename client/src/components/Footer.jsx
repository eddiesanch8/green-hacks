import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import instagram from "/instagram.png";
import tiktok from "/linkedin.png";
import linkednIn from "/tiktok.png";
import nativLogo from "/nativLogo.png";

function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerLeftCol">
          <img src={nativLogo} alt="Personal Logo" id="Logo__footer" />
          <p>
            With Nativ, we push to help others improve the environment, one planted seed at a time!
          </p>
          <div className="Socials">
            <img src={instagram} alt="Instagram" />
            <img src={linkednIn} alt="LinkedIn" />
            <img src={tiktok} alt="TikTok" />
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
