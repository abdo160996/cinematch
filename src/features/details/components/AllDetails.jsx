
import {  Box, Stack, Typography } from "@mui/material";

import { POSTER_PATH_BASE, IMDB_PAGE } from "../../../constants/constants";



//Icons
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DateRangeIcon from "@mui/icons-material/DateRangeRounded";
import StarIcon from "@mui/icons-material/Star";


import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import { MovieChip } from "../details.styled";

import GeneralInfo from "./GeneralInfo";
import Stats from "./Stats";
import TVSeasons from "./TVSeasons";
import { useParams } from "react-router-dom";

import AddRating from "./AddRating";

function AllDetails({ showData }) {
 
  const { mediaType } = useParams();

  function getMovieTime(mins) {
    if (mins) {
      const h = Math.floor((mins / 60));
      const m = mins % 60
      return `${h}h - ${m}m`;
    }
    return "N/A";
  }

 


  return (
    <Stack direction={"column"}>
      {/* Start Poster  */}
      <Box sx={{ marginY: 2, mx: "auto", width: "fit-content", borderRadius: "1rem", overflow: "hidden", height: "500px", boxShadow: 0, position: "relative" }}>
        <img src={`${POSTER_PATH_BASE}${showData.poster_path}`} style={{ maxWidth: "100%" }} />
      </Box>

      <AddRating />

      {/* Title  */}
      <Box textAlign={"center"}>
        <Typography sx={{ fontSize: "clamp(15px,1.5vw,25px)" }}  fontWeight={900}>
          {showData.title || showData.name}
        </Typography>
        <Typography variant="body2" color={"custom.text"} fontWeight={900} marginY={2} borderRadius={2}>
          {showData.tagline}
        </Typography>

        {/* summary */}
        <Stack direction={"column"} alignItems={"center"} spacing={2}>
          <Stack direction={"row"} flexWrap={"wrap"}  gap={4} marginTop={4}>
            <MovieChip icon={<StarIcon />} label={showData?.vote_average.toFixed(1)} />
            <MovieChip icon={<AccessTimeIcon />} label={getMovieTime(showData.runtime)} />
            <MovieChip  icon={<DateRangeIcon />} label={showData.release_date || showData.first_air_date} />
          </Stack>
          <Stack direction="row" spacing={1}>
            {showData.imdb_id && (
              <MovieChip
                clickable
                icon={<MovieFilterIcon />}
                component={"a"}
                href={`${IMDB_PAGE}/${showData.imdb_id}`}
                target="_blank"
                sx={{ color: "orange", boxShadow: 1, ":hover": { bgcolor: "custom.bgdark" } }}
                label={"IMDB"}
              />
            )}
          </Stack>
        </Stack>

        <Stack justifyContent={"space-between"} marginY={2} sx={{ flexDirection: "column", gap: 2 }}>
          <Stack justifyContent={"space-between"} marginY={2} sx={{ flexDirection: { xs: "column", md: "row" }, gap: 2 }}>
            <GeneralInfo data={showData} />
            <Stats showData={showData} />
          </Stack>
          {mediaType === "tv" && <TVSeasons showData={showData} />}
        </Stack>
      </Box>
    </Stack>
  );
}

export default AllDetails;
