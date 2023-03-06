import React from "react";
import { Pagination } from "@mui/material";
import "./CustomPagination.css";

const CustomPagination = ({ setPage, numberOfPages }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div className="pagination-container">
      <Pagination
        onChange={(e) => handlePageChange(e.target.textContent)}
        count={10}
        color="primary"
        hideNextButton
        hidePrevButton
      />
    </div>
  );
};

export default CustomPagination;
