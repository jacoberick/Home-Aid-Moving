import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Reviews = ({ description, name }) => {
  return (
    <div className="review-container">
      <div className="stars-container">
        <FontAwesomeIcon className="icon stars" icon={faStar} />
        <FontAwesomeIcon className="icon stars" icon={faStar} />
        <FontAwesomeIcon className="icon stars" icon={faStar} />
        <FontAwesomeIcon className="icon stars" icon={faStar} />
        <FontAwesomeIcon className="icon stars" icon={faStar} />
      </div>
      <p className="description">{description}</p>
      <p className="name">-{name}</p>

      <a
        target="_blank"
        href="https://www.google.com/search?rlz=1C5CHFA_enUS921US921&ei=Vu--X8mqG-j25gKmurLYBQ&q=Home-Aid+Moving%2C+LLC%2C+Spring+Hill%2C+TN&oq=Home-Aid+Moving&gs_lcp=CgZwc3ktYWIQARgBMgkIABDJAxAWEB4yAggmOgQIABBHOg0ILhDHARCvARBDEJMCOgYIABAKEEM6CwguEMcBEK8BEJECOgUIABCRAjoNCC4QsQMQxwEQowIQQzoECAAQQzoECC4QQzoLCC4QsQMQxwEQowI6CAguELEDEIMBOggIABCxAxCRAjoOCC4QsQMQgwEQxwEQowI6BQgAEMkDOgUIABCSAzoNCC4QxwEQowIQQxCTAjoKCC4QxwEQowIQQzoCCAA6CAguEMcBEK8BOgQIABANOgoILhDHARCvARANOgQIABAeOgYIABAKEB46CQgAEMkDEAoQHjoGCAAQFhAeOggIABAWEAoQHlDFX1jTfGD5kQFoAnAEeACAAXGIAdELkgEEMTQuM5gBAKABAaoBB2d3cy13aXrIAQjAAQE&sclient=psy-ab#lrd=0x886379bf40428dc7:0xab0feda87a6d2eee,1,,,"
      >
        See All Reviews
      </a>
    </div>
  );
};

export default Reviews;
