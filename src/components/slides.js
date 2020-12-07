import React from "react";
import Carousel from "react-bootstrap/Carousel";
import SlideOne from "../assets/imgs/movingbox.jpg";
import SlideTwo from "../assets/imgs/blankets.jpg";
import Reviews from "./reviews";

const Slides = () => {
  return (
    <div className="slides-container">
      <Carousel interval={5000}>
        {/* ITEM 1 */}
        <Carousel.Item>
          <img className="d-block" src={SlideOne} alt="First slide" />
          <Reviews
            description="We couldn't be more happy with the way these guys moved us!  They were punctual, courteous, careful, responsible, and honestly the BEST MOVING EXPERIENCE we have ever had!"
            name="Daniel Veirs"
          />
        </Carousel.Item>
        {/* ITEM 2 */}
        <Carousel.Item>
          <img className="d-block" src={SlideTwo} alt="Third slide" />
          <Reviews
            description="I am very grateful for this moving company. The men moving my things were very professional and kind. They kept all my possessions safe and got the job done quickly! I would definitely recommend them. I was very happy with my experience."
            name="Rachel H."
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slides;
