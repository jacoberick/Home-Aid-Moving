import React from "react";
import HeaderLogo from "../assets/header-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <img className="logo" src={HeaderLogo} alt="Home-Aid Logo" />
      </div>
      <div className="header-right">
        <a className="links" href="">
          Testimonials
        </a>
        <a className="links" href="">
          About Us
        </a>
        <a className="links" href="">
          Contact
        </a>
        <div className="contact-container">
          <FontAwesomeIcon className="phone-icon" icon={faMobileAlt} />
          <div className="number-description">
            <p className="free-quote">CALL FOR A FREE QUOTE</p>
            <a className="phone-number links" href="tel:615-482-4796">
              (615) 482-4796
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
