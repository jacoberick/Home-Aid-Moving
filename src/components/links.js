import React from "react";
import $ from "jquery";

const Links = ({ burger, setBurger, active, refs }) => {
  const handleClick = (e, ref) => {
    e.preventDefault();
    setBurger({ ...burger, active: 0 });
    const top = ref.current.offsetTop - refs.header.current.clientHeight;
    $("html, body").animate(
      {
        scrollTop: top,
      },
      1000
    );
  };

  return (
    <div>
      <a
        className="links"
        href="http://bit.ly/3raecIG"
        target="_blank"
        rel="noreferrer"
      >
        Testimonials
      </a>
      <a
        className="links"
        href="#aboutContainer"
        onClick={(e) => handleClick(e, refs.about)}
      >
        About Us
      </a>
      <a
        className="links"
        href="#galleryContainer"
        onClick={(e) => handleClick(e, refs.gallery)}
      >
        Gallery
      </a>
      <a
        className="links"
        href="#contactContainer"
        onClick={(e) => handleClick(e, refs.contact)}
      >
        Contact
      </a>
    </div>
  );
};

export default Links;
