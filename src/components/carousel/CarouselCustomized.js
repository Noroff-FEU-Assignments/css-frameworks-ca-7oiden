import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { CarouselImage1 } from "../images/CarouselImages";
import { CarouselImage2 } from "../images/CarouselImages";
import { CarouselImage3 } from "../images/CarouselImages";

function StyledCarousel() {
  return (
    <Carousel controls={false} interval={null}>
      <Carousel.Item>
        <CarouselImage1 />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage2 />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage3 />
      </Carousel.Item>
    </Carousel>
  );
}

export default StyledCarousel;
