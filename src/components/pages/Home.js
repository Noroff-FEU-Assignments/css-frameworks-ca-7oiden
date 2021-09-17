import React from "react";
import AccordionCustomized from "../accordion/AccordionCustomized";
import CarouselCustomized from "../carousel/CarouselCustomized";
import TabsCustomized from "../tabs/TabsCustomized";
import MainHeading from "../typography/MainHeading";
import MainText from "../typography/MainText";

function Home() {
  return (
    <>
      <CarouselCustomized></CarouselCustomized>
      <div className="main-container">
        <MainHeading>We do YAY things</MainHeading>
        <MainText>
          Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a
          rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend
          finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet,
          consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa
          euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus
          a, varius eget massa.
        </MainText>
        <AccordionCustomized />
        <TabsCustomized />
      </div>
    </>
  );
}

export default Home;
