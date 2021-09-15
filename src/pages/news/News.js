import React from "react";
import MainHeading from "../../components/typography/MainHeading";
import CardCustomized from "../../components/card/CardCustomized";
import PaginationCustomized from "../../components/pagination/PaginationCustomized";

function News() {
  return (
    <div className="main-container">
      <MainHeading>News</MainHeading>
      <PaginationCustomized />
      <CardCustomized />
      <PaginationCustomized />
    </div>
  );
}

export default News;
