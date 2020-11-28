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
        <a
          className="links"
          href="https://www.google.com/search?rlz=1C5CHFA_enUS921US921&ei=Vu--X8mqG-j25gKmurLYBQ&q=Home-Aid+Moving%2C+LLC%2C+Spring+Hill%2C+TN&oq=Home-Aid+Moving&gs_lcp=CgZwc3ktYWIQARgBMgkIABDJAxAWEB4yAggmOgQIABBHOg0ILhDHARCvARBDEJMCOgYIABAKEEM6CwguEMcBEK8BEJECOgUIABCRAjoNCC4QsQMQxwEQowIQQzoECAAQQzoECC4QQzoLCC4QsQMQxwEQowI6CAguELEDEIMBOggIABCxAxCRAjoOCC4QsQMQgwEQxwEQowI6BQgAEMkDOgUIABCSAzoNCC4QxwEQowIQQxCTAjoKCC4QxwEQowIQQzoCCAA6CAguEMcBEK8BOgQIABANOgoILhDHARCvARANOgQIABAeOgYIABAKEB46CQgAEMkDEAoQHjoGCAAQFhAeOggIABAWEAoQHlDFX1jTfGD5kQFoAnAEeACAAXGIAdELkgEEMTQuM5gBAKABAaoBB2d3cy13aXrIAQjAAQE&sclient=psy-ab#lrd=0x886379bf40428dc7:0xab0feda87a6d2eee,1,,,"
          target="_blank"
        >
          Testimonials
        </a>
        <a className="links" href="#aboutContainer">
          About Us
        </a>
        <a className="links" href="">
          Contact
        </a>
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
