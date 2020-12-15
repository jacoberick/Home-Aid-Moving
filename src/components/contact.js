import React from "react";

const Contact = ({ setRef }) => {
  return (
    <div id="contactContainer" className="contact-container" ref={setRef}>
      <h1 className="contact-title">Give us a call!</h1>
      <div className="contact-content">
        <a className="phone-number" href="tel:615-482-4796">
          <p className="p-number">(615)482-4796</p>
        </a>
        <p className="hours">Open every day from 8AM to 5PM.</p>
      </div>
    </div>
  );
};

export default Contact;
