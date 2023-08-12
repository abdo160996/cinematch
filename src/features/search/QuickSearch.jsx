import React from "react";
import { Paper, InputBase, Box, ButtonGroup, Button, Stack } from "@mui/material";

import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "./slices/searchSlice";
import SearchType from "./SearchType";

function QuickSearch() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchValue = useSelector((state) => state.searchBar.searchValue);

  function handleSearch(e) {
    dispatch(setSearchValue(e.target.value));
  }
  return (
    <Box sx={{ display: "flex", marginY: 2, justifyContent: "center" }}>
      <Paper component="form" sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: { xs: "100%", md: 600 }, flexDirection: { xs: "column", sm: "row" } }}>
        <Stack direction={"row"}>
          <SearchType />
          <InputBase sx={{ mx: 1, px: 1, borderBottom: "1px solid #333" }} placeholder="Search by title" inputProps={{ "aria-label": "search Movies" }} onChange={handleSearch} />
        </Stack>
        <ButtonGroup variant="text" aria-label="text button group" sx={{ marginY: { xs: 2, sm: 0 } }}>
          <Button aria-label="search" onClick={() => navigate(`search/${searchValue}`)} endIcon={<SearchIcon />}>
            Quick search
          </Button>
          <Button aria-label="menu" onClick={() => navigate("filter")} endIcon={<TuneIcon />}>
            Filter
          </Button>
        </ButtonGroup>
      </Paper>
    </Box>
  );
}

export default QuickSearch;
