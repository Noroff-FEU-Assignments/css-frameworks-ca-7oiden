import React from "react";
import TabImg1 from "../../images/tab/tab-1.jpg";
import TabImg2 from "../../images/tab/tab-2.jpg";
import TabImg3 from "../../images/tab/tab-3.jpg";

export function ContentImage1() {
  return (
    <img
      src={TabImg1}
      alt="old television in front of a worn concrete wall"
      className="content-image"
    />
  );
}

export function ContentImage2() {
  return (
    <img
      src={TabImg2}
      alt="multiple old pictures in wooden frames on a wooden wall"
      className="content-image"
    />
  );
}

export function ContentImage3() {
  return (
    <img
      src={TabImg3}
      alt="old worn and cracked mirror on a wooden wall"
      className="content-image"
    />
  );
}
