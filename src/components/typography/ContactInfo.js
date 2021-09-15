import React from "react";

function ContactInfo() {
  return (
    <>
      <div>
        <i className="fas fa-envelope"></i>
        <p>hello@yay.com</p>
      </div>
      <div>
        <i className="fas fa-phone"></i>
        <p>123 456 7890</p>
      </div>
      <div>
        <i className="fas fa-map-marker-alt"></i>
        <div className="address-container">
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
