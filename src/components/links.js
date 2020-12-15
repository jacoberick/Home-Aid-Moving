import React from "react";
import $ from "jquery";

const Links = ({ burger, setBurger, active, refs }) => {
  const handleClick = (e, ref) => {
    e.preventDefault();
    setBurger({ ...burger, active: 0 });
    let top = ref.current.offsetTop - refs.header.current.clientHeight;
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
        href="https://www.google.com/search?rlz=1C5CHFA_enUS921US921&ei=Vu--X8mqG-j25gKmurLYBQ&q=Home-Aid+Moving%2C+LLC%2C+Spring+Hill%2C+TN&oq=Home-Aid+Moving&gs_lcp=CgZwc3ktYWIQARgBMgkIABDJAxAWEB4yAggmOgQIABBHOg0ILhDHARCvARBDEJMCOgYIABAKEEM6CwguEMcBEK8BEJECOgUIABCRAjoNCC4QsQMQxwEQowIQQzoECAAQQzoECC4QQzoLCC4QsQMQxwEQowI6CAguELEDEIMBOggIABCxAxCRAjoOCC4QsQMQgwEQxwEQowI6BQgAEMkDOgUIABCSAzoNCC4QxwEQowIQQxCTAjoKCC4QxwEQowIQQzoCCAA6CAguEMcBEK8BOgQIABANOgoILhDHARCvARANOgQIABAeOgYIABAKEB46CQgAEMkDEAoQHjoGCAAQFhAeOggIABAWEAoQHlDFX1jTfGD5kQFoAnAEeACAAXGIAdELkgEEMTQuM5gBAKABAaoBB2d3cy13aXrIAQjAAQE&sclient=psy-ab#lrd=0x886379bf40428dc7:0xab0feda87a6d2eee,1,,,"
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
