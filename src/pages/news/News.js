import React from "react";
import MainHeading from "../../components/typography/MainHeading";
import CardCustomized from "../../components/card/CardCustomized";

function News() {
  return (
    <div className="main-container">
      <MainHeading>News</MainHeading>
        <CardCustomized />
    </div>
  );
}

export default News;
