import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { ContentImage1 } from "../images/ContentImages";
import { ContentImage2 } from "../images/ContentImages";
import { ContentImage3 } from "../images/ContentImages";
import ContentLinks from "../typography/ContentLinks";
import ContentText from "../typography/ContentText";

function AccordionCustomized() {
  return (
    <div className="accordion-container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>First</Accordion.Header>
          <Accordion.Body>
            <ContentText></ContentText>
            <ContentImage1 />
            <ContentLinks />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Second</Accordion.Header>
          <Accordion.Body>
            <ContentText />
            <ContentImage2 />
            <ContentLinks />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Third</Accordion.Header>
          <Accordion.Body>
            <ContentText />
            <ContentImage3 />
            <ContentLinks />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionCustomized;
