import React from "react";
import MainHeading from "../typography/MainHeading";
import CardCustomizedGrid from "../card/CardCustomizedGrid";
import PaginationCustomized from "../pagination/PaginationCustomized";

function News() {
  return (
    <div className="main-container">
      <MainHeading>News</MainHeading>
      <PaginationCustomized />
      <CardCustomizedGrid />
      <PaginationCustomized />
    </div>
  );
}

export default News;
