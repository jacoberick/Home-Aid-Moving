import React from "react";
import Links from "./links.js";

const MobileNav = ({ burger, setBurger, active, refs }) => {
  return (
    <div
      className={`mobile-nav-container ${active ? "slide-in" : "slide-out"}`}
    >
      <div className="menu">
        <div className="link-container">
          <Links
            refs={refs}
            burger={burger}
            setBurger={setBurger}
            active={active}
          />
        </div>
      </div>
      <div
        className="exit-menu"
        onClick={() => {
          if (active) setBurger({ ...burger, active: false });
        }}
      ></div>
    </div>
  );
};

export default MobileNav;
