import React, { useState } from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateKeywords } from "../slices/advancedSearchSlice";
import { useGetKeywordsListQuery } from "../../../api/moviesApi";
import { useDebounce } from "@uidotdev/usehooks";
function AutocompleteKeywords() {
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("");
  const debouncedValue = useDebounce(keyword, 500);

  const { data: keywordsList, isLoading } = useGetKeywordsListQuery(debouncedValue, { skip: debouncedValue === "" });
  const handleInputChange = (_, newInputValue) => {
    setKeyword(newInputValue);
  };
 
  const handleSelectChange = (_, newValue) => {
    const keywords = newValue.map(keyword=>keyword.id)
    dispatch(updateKeywords(keywords));
  };
  return (
    <Autocomplete
      fullWidth
      sx={{ ".MuiAutocomplete-tag": { margin: "8px" }, flex: 1 }}
      multiple
      id="keywords"
      noOptionsText="start typing"
      loading={isLoading}
      loadingText="loading..."
      options={keywordsList || []}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      onChange={handleSelectChange}
      onInputChange={handleInputChange}
      renderInput={(params) => <TextField {...params} label="keywords" placeholder="keywords" />}
    />
  );
}

export default AutocompleteKeywords;
