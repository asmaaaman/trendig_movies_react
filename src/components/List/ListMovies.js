import React from "react";

import CustomPagination from "../Pagination/CustomPagination";
import SingleMedia from "../SingleMediaContent/SingleMedia";
import "./ListMovies.css";

const ListMovies = ({ moviesList, numberOfPages, setPage }) => {
  return (
    <>
      <h3 className="pageTitle">Latest Movies & Tv Shows</h3>
      <div className="trending">
        {moviesList &&
          moviesList.map((media) => (
            <SingleMedia key={media.id} media={media} />
          ))}
      </div>
      {numberOfPages > 1 && (
        <CustomPagination setPage={setPage} numberOfPages={numberOfPages} />
      )}
    </>
  );
};

export default ListMovies;
