import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

import genresData from "../../../constants/genres.json";
import { updateGenres } from "../slices/advancedSearchSlice";
import { useDispatch } from "react-redux";

export default function Genres() {
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    const generes = newValue.map(genre=>genre.id)
    dispatch(updateGenres(generes));
  };
  return (
    <Autocomplete
    fullWidth
      sx={{ flex: "1" }}
      disableCloseOnSelect
      multiple
      id="Genres"
      options={genresData.genres}
      getOptionLabel={(option)=>option.name}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      onChange={handleChange}
      renderInput={(params) => <TextField name="genres" {...params} variant="outlined" label="Genres" placeholder="Genres" />}
    />
  );
}
