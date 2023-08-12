
import { Paper, Button, Stack,  } from "@mui/material";

import { useNavigate } from "react-router-dom";

import AutocompleteKeywords from "./searchComponents/AutocompleteKeywords";
import MoviesYear from "./searchComponents/MoviesYear";

import Langs from "./searchComponents/Langs";
import UserRating from "./searchComponents/UserRating";
import SortBy from "./searchComponents/SortBy";
import MovieCountry from "./searchComponents/MovieCountry";
import Genres from "./searchComponents/Genres";

import MediaType from "./searchComponents/MediaType";
import Wrapper from "../../components/Wrapper";

function AdvancedSearch() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Paper component="form" elevation={1} sx={{ p: 2 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2} alignItems={"center"}>
        <MediaType/>
          <Genres />
          <AutocompleteKeywords />
        </Stack>
        <Stack direction={{ xs: "column", md: "row" }} marginY={4} alignItems={"center"} spacing={2}>
          <MovieCountry />
          <Langs />
        </Stack>
        <Stack direction={{ xs: "column", md: "row" }} marginY={4} alignItems={"center"} spacing={2}>
          <UserRating />
          <SortBy />
        </Stack>

        <Stack direction={{ xs: "column", md: "row" }}  marginY={4} alignItems={"center"} spacing={2}>
          <MoviesYear />
          
        </Stack>
<Button variant="outlined" onClick={() => navigate("filter_results")}>
          Search
        </Button>
      
      </Paper>
    </Wrapper>
  );
}

export default AdvancedSearch;
