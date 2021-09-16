import React from "react";
import FormCustomized from "../../components/forms/FormCustomized";
import ContactInfo from "../../components/typography/ContactInfo";
import MainHeading from "../../components/typography/MainHeading";

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
