import React from "react";
import BoxStack from "../assets/imgs/boxStack.png";

const AboutUs = () => {
  return (
    <div className="about-container" id="aboutContainer">
      <div className="left-about">
        <img className="box-stack-img" src={BoxStack} alt="" />
      </div>
      <div className="right-about">
        <h1 className="about-title">Who we are...</h1>
        <div className="description-container">
          <p className="about-description">
            At Home-Aid Moving we understand how stressful moving day is. Our
            job is to make that stressful day, stress free. Our teams offer 6+
            years of experience, a hard work ethic, and a smile day in and day
            out. Home-Aid Moving also strives to offer the best rates around.
            Services provided are Labor Only (2 Movers), as well as Full Service
            Truck Moves(2 Movers+Truck). Our movers show up to both labor only
            and full service moves, fully equipped with all the moving equipment
            and blankets needed to keep your belongings safe. At Home-Aid we
            realize there is already so much to worry about on moving day; Could
            be anything from taking the kids to daycare, to getting the
            utilities switched over to the new place. Let our experienced
            planning team asses your move and schedule a move time most
            convenient for you. Our team will arrive on time and ready to make
            sure the move is the last thing you have to worry about. When
            purchasing Home-Aid Moving services your purchasing Peace of Mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
