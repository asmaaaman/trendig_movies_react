import React, { useState } from "react";
import Box from "@mui/material/Box";
import { makeStyles, SvgIcon } from "@material-ui/core";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SubjectIcon from "@mui/icons-material/Subject";

const useStyles = makeStyles(() => ({
  mediTypeContainer: {
    width: "40%",
    "@media(max-width: 1000px)": {
      width: "100%",
    },
  },
}));
const mediaTypes = [
  {
    value: "Movie",
    filteredValue: 1,
    label: "Movie",
  },
  {
    value: "TV",
    filteredValue: 2,
    label: "Tv",
  },
];

const FilterMovies = ({ moviesList, filterValueSelected, filterText }) => {
  const { mediTypeContainer } = useStyles();

  const handleChange = (event) => {
    filterValueSelected(event.target.value);
  };

  const handleMediaType = (value) => {
    const MediaTypeBox = (
      <Box sx={{ display: "flex", gap: 1 }}>
        <SvgIcon sx={{ color: "grey" }}>
          <SubjectIcon />
        </SvgIcon>

        {value !== "" ? value : "Media Type"}
      </Box>
    );
    return MediaTypeBox;
  };
  return (
    <FormControl className={mediTypeContainer}>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        displayEmpty
        value={filterText}
        defaultValue=""
        onChange={handleChange}
        renderValue={(value) => handleMediaType(value)}
        //   onClick={(e) => handleFilter(e)}
      >
        {mediaTypes.map((option) => (
          <MenuItem
            id={option.filteredValue}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterMovies;
