import React from "react";
import FormCustomized from "../forms/FormCustomized";
import ContactInfo from "../typography/ContactInfo";
import MainHeading from "../typography/MainHeading";

function Contact() {
  return (
    <div className="contact-page-wrapper">
      <div className="contact-info-container">
        <ContactInfo />
      </div>
      <div className="form-wrapper">
        <div className="form-wrapper-header">
          <MainHeading>Submit your details</MainHeading>
        </div>
        <div className="form-wrapper-container">
          <FormCustomized />
        </div>
      </div>
    </div>
  );
}

export default Contact;


