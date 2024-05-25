import React from "react";
import BoxStack from "../assets/imgs/boxStack.png";

const AboutUs = ({ setRef }) => {
  const yearsInService = new Date().getFullYear() - 2011;

  return (
    <div className="about-container" id="aboutContainer" ref={setRef}>
      <h1>
        Home-Aid Moving: Elite Moving Services for Residential and Commercial
        Clients
      </h1>
      <div className="container">
        <div className="left-about">
          <img className="box-stack-img" src={BoxStack} alt="" />
        </div>
        <div className="right-about">
          <h2 className="about-title">Our Vision</h2>
          <div className="description-container">
            <p className="about-description indent">
              At Home-Aid Moving, we understand the anxiety and hassle that
              comes with moving day. Our mission is to transform the stress of
              moving into a seamless, stress-free experience. With over{" "}
              {yearsInService} years of expertise in the industry, our highly
              experienced team prides itself on a strong work ethic and friendly
              demeanor. We are dedicated to providing the most competitive rates
              in the market while being recognized as the standard-bearer for
              dependability and safety in the moving industry.
            </p>
          </div>
          <h2 className="about-title">Core Values</h2>
          <div className="description-container">
            <ol className="about-description">
              <li>
                <strong>Hard Work:</strong> We dedicate ourselves to
                consistently delivering top-notch services.
              </li>
              <li>
                <strong>Honesty and Transparency:</strong> We maintain open and
                honest communication with our clients.
              </li>
              <li>
                <strong>Kindness:</strong> We approach every move with a
                friendly and considerate attitude.
              </li>
              <li>
                <strong>Going the Extra Mile:</strong> We strive to exceed our
                clients' expectations in every aspect of our service.
              </li>
              <li>
                <strong>Continuous Learning:</strong> We constantly improve and
                adapt to provide the best possible experience.
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div id="" className="services-container" ref={setRef}>
        <h1 className="service-header">Our Services</h1>

        <div className="">
          <h2 className="service-title">Full-Service Relocation</h2>
          <p className="about-description indent">
            We specialize in full-service relocation for residential and
            commercial moves. Our services include movers and trucks for local
            moves, ensuring all your belongings are transported safely from one
            location to another.
          </p>

          <h2 className="service-title">Packing and Unpacking Services</h2>
          <p className="about-description indent">
            We offer comprehensive packing and unpacking services, including
            packing items into boxes and handling all aspects of packing. Our
            professional packers ensure that your belongings are securely packed
            and ready for the move.
          </p>

          <h2 className="service-title">Labor-Only Moves</h2>
          <p className="about-description indent">
            For clients who only need movers and moving equipment, we offer
            labor-only moves. This service is ideal for one-location moves where
            transportation is not required.
          </p>

          <h2 className="service-title">Long-Distance Moving</h2>
          <p className="about-description indent">
            We provide long-distance out-of-state moving services for distances
            up to 10 hours away. Our team ensures that your move is handled with
            the utmost care, no matter the distance.
          </p>
        </div>
      </div>

      <div id="" className="services-container" ref={setRef}>
        <h1 className="service-header">Excellence in Every Step</h1>
        <div className="">
          <h2 className="service-title">Professional and Dependable Service</h2>
          <p className="about-description indent">
            Our professional planning team works with you to assess your move
            and create a schedule that is convenient for you. We arrive promptly
            on the day of your move, ensuring that the process is the last thing
            you have to worry about.
          </p>

          <h2 className="service-title">Client-First Approach</h2>
          <p className="about-description indent">
            By selecting Home-Aid Moving, you are choosing a professional and
            dependable moving service. You are investing in peace of mind,
            knowing that your move is in capable hands. As a locally owned and
            operated company, we bring a family feel to your moving experience,
            fostering genuine connections and always prioritizing your needs.
          </p>

          <h2 className="service-title">Proven Process</h2>
          <p className="about-description indent">
            We ensure a flawless moving experience by addressing common industry
            pitfalls and maintaining high standards through discipline, hard
            work, and a kind heart.
          </p>

          <h2 className="service-title">Guarantee</h2>
          <p className="about-description indent">
            We are committed to making every decision with a strong moral
            compass, focusing on creating beneficial relationships and impactful
            experiences for our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
