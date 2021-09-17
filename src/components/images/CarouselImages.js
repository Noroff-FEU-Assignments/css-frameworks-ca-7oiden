import React from "react";
import CarouselImg1 from "../../images/carousel/carousel-1.jpg";
import CarouselImg2 from "../../images/carousel/carousel-2.jpg";
import CarouselImg3 from "../../images/carousel/carousel-3.jpg";

export function CarouselImage1() {
  return (
    <div
      className="carousel-image"
      style={{ backgroundImage: `url(${CarouselImg1})` }}
    ></div>
  );
}

export function CarouselImage2() {
  return (
    <div
      className="carousel-image"
      style={{ backgroundImage: `url(${CarouselImg2})` }}
    ></div>
  );
}

export function CarouselImage3() {
  return (
    <div
      className="carousel-image"
      style={{ backgroundImage: `url(${CarouselImg3})` }}
    ></div>
  );
}
