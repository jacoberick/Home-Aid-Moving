import React from "react";
import HeaderLogo from "../assets/black-home-aid-full.png";

const Header = () => {
  return (
    <div className="header-container">
      <img className="logo" src={HeaderLogo} alt="Home-Aid Logo" />
      <a className="links header-children" href="">
        Testimonials
      </a>
      <a className="links header-children" href="">
        About Us
      </a>
      <a className="links header-children" href="">
        Contact
      </a>
      <a className="phone-number header-children" href="tel:615-482-4796">
        (615) 482-4796
      </a>
    </div>
  );
};

export default Header;
