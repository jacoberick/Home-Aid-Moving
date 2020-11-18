import React from "react";
import Carousel from "react-bootstrap/Carousel";
import SlideOne from "../assets/imgs/1.jpg";
import SlideTwo from "../assets/imgs/2.jpg";
import SlideThree from "../assets/imgs/3.jpg";

const Slides = () => {
  return (
    <div className="slides-container">
      <Carousel interval={3000}>
        <Carousel.Item>
          <img className="d-block w-100" src={SlideOne} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={SlideTwo} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={SlideThree} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slides;
