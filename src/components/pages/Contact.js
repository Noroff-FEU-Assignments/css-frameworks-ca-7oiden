import React from "react";
import FormCustomized from "../forms/FormCustomized";
import ContactInfo from "../typography/ContactInfo";
import MainHeading from "../typography/MainHeading";

function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-info-container">
        <ContactInfo />
      </div>
      <div className="contact-form-wrapper">
        <div className="contact-form-header">
          <MainHeading>Submit your details</MainHeading>
        </div>
        <div className="contact-form-container">
          <FormCustomized />
        </div>
      </div>
    </div>
  );
}

export default Contact;


