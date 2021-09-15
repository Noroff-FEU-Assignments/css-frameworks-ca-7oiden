import React from "react";
import Pagination from "react-bootstrap/Pagination";

function PaginationCustomized() {
  return (
    <Pagination>
      <Pagination.Item active href="#">
        {1}
      </Pagination.Item>
      <Pagination.Item href="#">{2}</Pagination.Item>
      <Pagination.Item href="#">{3}</Pagination.Item>
      <Pagination.Item href="#">{4}</Pagination.Item>
    </Pagination>
  );
}

export default PaginationCustomized;
