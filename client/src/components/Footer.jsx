import React from "react";
import { Link } from "react-router-dom";
import "../styles/headFoot.css";
import nativLogo from "/nativLogo.png";

function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerLeftCol">
          <img src={nativLogo} alt="Personal Logo" id="Logo__nav" />
          <p className="green-text text-darken-3">
            With Nativ, we try our best to help others improve the environment,
            one planted seed at a time!
          </p>
          <div className="Socials">
            <img src={insta} alt="Instagram" />
            <img src={linkedin} alt="LinkedIn" />
            <img src={tiktok} alt="TikTok" />
          </div>
        </div>

        <div className="footerRightCol">
          <ul>
            <li
              className="footerLinkHead green-text text-darken-4"
              style={{ textDecoration: "underline" }}
            >
              Links
            </li>
            <li className="footerLinks">
              <Link to="/" className="green-text text-darken-1">
                Home
              </Link>
            </li>
            <li className="footerLinks">
              <Link to="/" className="green-text text-darken-1">
                Survey
              </Link>
            </li>
            <li className="footerLinks">
              <Link to="/" className="green-text text-darken-1">
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
