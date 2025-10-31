import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/headFoot.css";
import nativLogo from "../assets/nativLogo.png";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <img src={nativLogo} alt="Personal Logo" id="Logo__nav" />
          <p>
            With Nativ, we try our best to help others improve the environment,
            one planted seed at a time!
          </p>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/" />
              Home
            </li>
            <li>
              <Link to="/" />
              Survey
            </li>
            <li>
              <Link to="/" />
              About Us
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
