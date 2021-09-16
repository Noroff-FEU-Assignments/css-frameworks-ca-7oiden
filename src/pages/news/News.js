import React from "react";
import MainHeading from "../../components/typography/MainHeading";
import CardCustomizedGrid from "../../components/card/CardCustomizedGrid";
import PaginationCustomized from "../../components/pagination/PaginationCustomized";

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
