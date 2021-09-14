import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import TabImg1 from "../../images/tab/tab-1.jpg";
import TabImg2 from "../../images/tab/tab-2.jpg";
import TabImg3 from "../../images/tab/tab-3.jpg";
import ContentLinks from "../acc-tab-content/ContentLinks";
import ContentText from "../acc-tab-content/ContentText";

function TabsCustomized() {
  return (
    <Tabs
      defaultActiveKey="first"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="first" title="First">
        <ContentText />
        <img src={TabImg1} alt="" className="accordion-image" />
        <ContentLinks />
      </Tab>
      <Tab eventKey="second" title="Second">
        <ContentText />
        <img src={TabImg2} alt="" className="accordion-image" />
        <ContentLinks />
      </Tab>
      <Tab eventKey="third" title="Third">
        <ContentText />
        <img src={TabImg3} alt="" className="accordion-image" />
        <ContentLinks />
      </Tab>
    </Tabs>
  );
}

export default TabsCustomized;
