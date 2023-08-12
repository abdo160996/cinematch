import React from "react";
import countries from "../../../constants/countries.json";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateCountry } from "../slices/advancedSearchSlice";
function MovieCountry() {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.advancedSearch.with_origin_country);

  const handleChange = (event) => {
    dispatch(updateCountry(event.target.value));
  };
  const menuItems = countries.map((country) => <MenuItem key={country.iso_3166_1} value={country.iso_3166_1}>{country.english_name}</MenuItem>);
  return (
    <FormControl fullWidth sx={{ alignSelf: "end", flex: 1 }}>
      <InputLabel id="country">Country</InputLabel>
      <Select labelId="country" id="country-select" value={country} label="country" onChange={handleChange} MenuProps={{ sx: { height: "250px" } }}>
        {menuItems}
      </Select>
    </FormControl>
  );
}

export default MovieCountry;
