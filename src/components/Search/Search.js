import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Search } from "@mui/icons-material";
import FilterMovies from "../Filter/FilterMovies";
import { TextField } from "@material-ui/core";
import { searchMedia } from "../../network/api";
import SingleMedia from "../SingleMediaContent/SingleMedia";
import "../List/ListMovies.css";
import CustomPagination from "../Pagination/CustomPagination";

const SearchMedia = ({
  moviesList,
  filterValueSelected,
  handleSearchData,
  searchData,
  searchText,
}) => {
  return (
    <>
      <Box sx={{ backgroundColor: "#F7F7F7", p: 2 }}>
        <Grid sx={{ p: 3 }} container spacing={2}>
          <Grid item xs={12} md={8}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <>
                <Search sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  onKeyDown={(event) => handleSearchData(event)}
                  fullWidth
                  id="input-with-sx"
                  placeholder="Find movies tv shows documentary and more... "
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                />
              </>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <FilterMovies
              filterValueSelected={filterValueSelected}
              moviesList={moviesList}
            />
          </Grid>
        </Grid>
      </Box>
      <div className="trending">
        {searchData && searchData?.map((item) => <SingleMedia media={item} />)}
        {searchText && !searchData && <h2>No Series Found</h2>}
      </div>
      {/* {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )} */}
    </>
  );
};

export default SearchMedia;