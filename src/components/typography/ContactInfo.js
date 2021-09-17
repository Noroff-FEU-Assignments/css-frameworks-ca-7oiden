import React from "react";

function ContactInfo() {
  return (
    <>
      <div className="contact-info-items">
        <div className="contact-info-icon">
          <i className="fas fa-envelope"></i>
        </div>
        <p>hello@yay.com</p>
      </div>
      <div className="contact-info-items">
        <div className="contact-info-icon">
          <i className="fas fa-phone"></i>
        </div>
        <p>123 456 7890</p>
      </div>
      <div className="contact-info-items">
        <div className="contact-info-icon">
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <div className="contact-info-address">
          <p>123 Some Street</p>
          <p>Somewhere</p>
          <p>Some City</p>
          <p>10000</p>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
