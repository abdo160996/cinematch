import React from "react";
import { MovieChip, MovieDivider } from "../details.styled";
import { Box, Stack, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import { ShowDateChip, ShowInfoBox, ShowTitle } from "../../../components/styledComponents";
import { POSTER_500, POSTER_BACKUP } from "../../../constants/constants";
function TVSeasons({ showData }) {
  return (
    <Box borderRadius={"1rem"} p={2} boxShadow={1}>
      <Box borderRadius={"1rem"} sx={{ p: 2, borderRadius: "1rem", my: 2, boxShadow: 1, display: "flex", flexDirection: "column", alignItems: "start", gap: "1rem" }}>
        <MovieChip icon={<NewReleasesIcon />} label={`Lastest episode : ${showData.last_episode_to_air.name}`} />
        <Typography variant="body1" color={"custom.text"} textAlign={"justify"}>
          {showData.last_episode_to_air.overview}
        </Typography>
      </Box>

      <MovieDivider textAlign="left">
        <MovieChip label={`Seasons : ${showData.number_of_seasons} × Episodes : ${showData.number_of_episodes}`} icon={<InfoIcon />} />
      </MovieDivider>
      <Stack direction={"row"} spacing={2} overflow={"scroll"}>
        {showData.seasons.map((season, index) => (
          <Box key={season.id} sx={{ position: "relative", maxWidth: "200px", flex: "1 0 auto" }}>
            <ShowDateChip label={season.air_date?.split("-")[0]} size="medium" />
            <ShowDateChip sx={{ top: "1rem", left: "auto", right: "1rem" }} label={`Ep.${season.episode_count}`} size="medium" />
            <img width={"100%"} height={"100%"} loading="lazy" style={{ objectFit: "cover", borderRadius: "1rem", filter: "blur(.5px)" }} src={season.poster_path ? POSTER_500 + season.poster_path : POSTER_BACKUP} />
            <ShowInfoBox>
              <ShowTitle>{season.name}</ShowTitle>
            </ShowInfoBox>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default TVSeasons;
