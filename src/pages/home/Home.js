import React from "react";
import AccordionCustomized from "../../components/accordion/AccordionCustomized";
import CarouselCustomized from "../../components/carousel/CarouselCustomized";
import MainContainer from "../../components/layout/MainContainer";
import TabsCustomized from "../../components/tabs/TabsCustomized";
import MainHeading from "../../components/typography/MainHeading";
import MainText from "../../components/typography/MainText";

function Home() {
  return (
    <>
      <CarouselCustomized></CarouselCustomized>
      <MainContainer>
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
      </MainContainer>
    </>
  );
}

export default Home;
