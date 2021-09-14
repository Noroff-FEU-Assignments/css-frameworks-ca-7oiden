import React from "react";
import AccordionCustom from "../../components/accordion/AccordionCustom";
import CarouselCustom from "../../components/carousel/CarouselCustom";
import MainContainer from "../../components/layout/MainContainer";
import MainHeading from "../../components/typography/MainHeading";
import MainText from "../../components/typography/MainText";

function Home() {
  return (
    <>
      <CarouselCustom></CarouselCustom>
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
        <AccordionCustom />
      </MainContainer>
    </>
  );
}

export default Home;
