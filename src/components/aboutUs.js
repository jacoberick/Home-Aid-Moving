import React from "react"
import BoxStack from "../assets/imgs/boxStack.png"

const AboutUs = ({ setRef }) => {
  const yearsInService = new Date().getFullYear() - 2011
  const descArr = [
    `At Home-Aid Moving, our mission is to cultivate an optimal balance of hard work, transparency, and compassion to elevate our community and provide a service that makes a meaningful difference in peoples lives.`,
    `We understand the anxiety and hassle that comes with moving day. Our company is dedicated to providing a seamless and stress-free moving experience for our clients. Our highly experienced team of movers has over ${yearsInService} years of expertise in the industry, and we pride ourselves on our strong work ethic and friendly demeanor. Additionally, we are committed to providing the most competitive rates in the market.",
    "Our company offers both Labor-Only services (Movers Only) and Full-Service Truck Moves (Movers + 26ft Box truck). Regardless of the type of move you require, our movers will arrive fully equipped with all the necessary moving equipment and blankets to safeguard your belongings.",
    "We understand that moving day can be overwhelming, and our company's goal is to alleviate any additional stressors. Our professional planning team will work with you to assess your move and create a schedule that is convenient for you. We will arrive promptly on the day of your move, ensuring that the process is the last thing you have to worry about.",
    "In selecting Home-Aid Moving, you are not only selecting a professional and dependable moving service, but you are also investing in peace of mind.`,
  ]

  return (
    <div className="about-container" id="aboutContainer" ref={setRef}>
      <div className="container">
        <div className="left-about">
          <img className="box-stack-img" src={BoxStack} alt="" />
        </div>
        <div className="right-about">
          <h2 className="about-title">Our Mission</h2>
          <div className="description-container">
            <p className="about-description">{descArr[0]}</p>
          </div>
          <h2 className="about-title">Who we are</h2>
          <div className="description-container">
            <p className="about-description">{descArr[1]}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
