import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ContentLinks from "../typography/ContentLinks";
import ContentText from "../typography/ContentText";
import { ContentImage1 } from "../images/ContentImages";
import { ContentImage2 } from "../images/ContentImages";
import { ContentImage3 } from "../images/ContentImages";

function TabsCustomized() {
  return (
    <div className="tabs-container">
      <Tabs
        defaultActiveKey="first"
        id="uncontrolled-tab-example"
        className="tabs"
      >
        <Tab eventKey="first" title="First">
          <div className="tab-body">
            <ContentImage1 />
            <div className="tab-container">
              <ContentText />
              <ContentLinks />
            </div>
          </div>
        </Tab>
        <Tab eventKey="second" title="Second">
          <div className="tab-body">
            <ContentImage2 />
            <div className="tab-container">
              <ContentText />
              <ContentLinks />
            </div>
          </div>
        </Tab>
        <Tab eventKey="third" title="Third">
          <div className="tab-body">
            <ContentImage3 />
            <div className="tab-container">
              <ContentText />
              <ContentLinks />
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default TabsCustomized;
