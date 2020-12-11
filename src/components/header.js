import React from "react";
import HeaderLogo from "../assets/header-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import Links from "./links.js";

const Header = ({ burger, setBurger, active }) => {
  return (
    <div className="header-container">
      <div className="header-left">
        <img className="logo" src={HeaderLogo} alt="Home-Aid Logo" />
      </div>
      <div className="header-right">
        <div
          className="burger-bag"
          onClick={() => {
            active
              ? setBurger({ ...burger, active: false })
              : setBurger({ ...burger, active: true });
          }}
        >
          <div className="burger"></div>
        </div>
        <Links burger={burger} setBurger={setBurger} active={active} />
        <div className="icon-container">
          <FontAwesomeIcon className="icon" icon={faMobileAlt} />
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
