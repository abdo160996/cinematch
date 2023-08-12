import { FormControl, FormHelperText, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSortBy } from "../slices/advancedSearchSlice";

const sortByTypes = [
  "popularity.asc",
  "popularity.desc",
  "revenue.asc",
  "revenue.desc",
  "primary_release_date.asc",
  "primary_release_date.desc",
  "vote_average.asc",
  "vote_average.desc",
  "vote_count.asc",
  "vote_count.desc",
];

const menuItems = sortByTypes.map((type) => (
  <MenuItem key={type} value={type}>
    {type}
  </MenuItem>
));

function SortBy() {
  const sortType = useSelector((state) => state.advancedSearch.sort_by);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(updateSortBy(event.target.value));
  };
  return (
    <FormControl fullWidth sx={{ flex: "1", alignSelf: "end", my: 4 }}>
      <InputLabel id="sort-movies">Sort by.</InputLabel>
      <Select labelId="sort-movies" id="sort-movies" value={sortType} label="sort-movies" onChange={handleChange} MenuProps={{ sx: { height: "200px" } }}>
        {menuItems}
      </Select>
    </FormControl>
  );
}

export default SortBy;
