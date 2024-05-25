import React from "react";
import HeaderLogo from "../assets/header-logo.jpg";
import bbbLogo from "../assets/logos/bbb.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import Links from "./links.js";
import $ from "jquery";

const Header = ({ burger, setBurger, active, setRef, refs }) => {
  const rtb = () => {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  };

  return (
    <div className="header-container" ref={setRef}>
      <div className="header-left">
        <button>
          <img
            onClick={rtb}
            className="logo"
            src={HeaderLogo}
            alt="Home-Aid Logo"
          />
        </button>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.bbb.org/us/tn/columbia/profile/moving-services/home-aid-moving-0573-37352349"
        >
          <img src={bbbLogo} alt="BBB Logo" id="bbb" />
        </a>
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
          <div className={`burger ${active ? "burger--ex" : ""}`}></div>
        </div>
        <Links
          refs={refs}
          burger={burger}
          setBurger={setBurger}
          active={active}
        />
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
