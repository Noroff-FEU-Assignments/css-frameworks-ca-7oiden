import React from "react";
import Accordion from "react-bootstrap/Accordion";
import TabImg1 from "../../images/tab/tab-1.jpg";
import TabImg2 from "../../images/tab/tab-2.jpg";
import TabImg3 from "../../images/tab/tab-3.jpg";
import ContentLinks from "../acc-tab-content/ContentLinks";
import ContentText from "../acc-tab-content/ContentText";

function AccordionCustomized() {
  return (
    <div className="accordion-container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>First</Accordion.Header>
          <Accordion.Body>
            <ContentText />
            <img src={TabImg1} alt="" className="content-image" />
            <ContentLinks />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Second</Accordion.Header>
          <Accordion.Body>
            <ContentText />
            <img src={TabImg2} alt="" className="content-image" />
            <ContentLinks />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Third</Accordion.Header>
          <Accordion.Body>
            <ContentText />
            <img src={TabImg3} alt="" className="content-image" />
            <ContentLinks />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionCustomized;
