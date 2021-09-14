import React from "react";
import Accordion from "react-bootstrap/Accordion";
import TabImg1 from "../../images/tab/tab-1.jpg";
import TabImg2 from "../../images/tab/tab-2.jpg";
import TabImg3 from "../../images/tab/tab-3.jpg";
import AccordionLinks from "./AccordionLinks";

function StyledAccordion() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>First</Accordion.Header>
        <Accordion.Body>
          Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
          venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
          ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
          condimentum mattis rhoncus.
          <img src={TabImg1} alt="" className="accordion-image" />
          <AccordionLinks />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Second</Accordion.Header>
        <Accordion.Body>
          Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
          venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
          ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
          condimentum mattis rhoncus.
          <img src={TabImg2} alt="" className="accordion-image" />
          <AccordionLinks />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Third</Accordion.Header>
        <Accordion.Body>
          Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
          venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
          ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
          condimentum mattis rhoncus.
          <img src={TabImg3} alt="" className="accordion-image" />
          <AccordionLinks />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default StyledAccordion;
