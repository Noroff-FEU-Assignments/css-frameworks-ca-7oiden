import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImg1 from "../../images/carousel/carousel-1.jpg";
import CarouselImg2 from "../../images/carousel/carousel-2.jpg";
import CarouselImg3 from "../../images/carousel/carousel-3.jpg";

function StyledCarousel() {
  return (
    <Carousel controls={false} interval={null}>
      <Carousel.Item>
        <div
          className="carousel-image"
          style={{ backgroundImage: `url(${CarouselImg1})` }}
        ></div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="carousel-image"
          style={{ backgroundImage: `url(${CarouselImg2})` }}
        ></div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="carousel-image"
          style={{ backgroundImage: `url(${CarouselImg3})` }}
        ></div>
      </Carousel.Item>
    </Carousel>
  );
}

export default StyledCarousel;
