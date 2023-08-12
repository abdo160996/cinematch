import React from "react";
import langs from "../../../constants/langs.json";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateLanguage } from "../slices/advancedSearchSlice";
function Langs() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.advancedSearch.with_original_language);
  const handleChange = (event) => {
    dispatch(updateLanguage(event.target.value));
  };
  const menuItems = langs.map((lang) => <MenuItem key={lang.iso_639_1} value={lang.iso_639_1}>{lang.english_name}</MenuItem>);
  return (
    <FormControl fullWidth sx={{ alignSelf: "end", flex: 1 }}>
      <InputLabel id="language">Language</InputLabel>
      <Select labelId="language" id="language-select" value={lang} label="language" onChange={handleChange} MenuProps={{ sx: { height: "250px" } }}>
        {menuItems}
      </Select>
    </FormControl>
  );
}

export default Langs;
