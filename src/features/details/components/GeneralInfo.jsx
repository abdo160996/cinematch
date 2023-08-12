import React from "react";
import { MovieChip, MovieDivider } from "../details.styled";
import { Box, Stack, Typography } from "@mui/material";

import LanguageIcon from "@mui/icons-material/Language";
import CategoryIcon from "@mui/icons-material/Category";
import InfoIcon from "@mui/icons-material/Info";

function GeneralInfo({ data }) {
  return (
    <Box borderRadius={"1rem"} p={2} boxShadow={1}>
      <MovieDivider textAlign="left">
        <MovieChip label="Overview" icon={<InfoIcon />} />
      </MovieDivider>
      <Typography variant="body1" color={"custom.text"} textAlign={"justify"}>
        {data.overview}
      </Typography>

      <MovieDivider textAlign="left">
        <MovieChip label="Genres" icon={<CategoryIcon />} />
      </MovieDivider>
      <Stack direction="row" gap={2} flexWrap={"wrap"}>
        {data.genres.map((genre) => (
          <MovieChip key={genre.id} label={genre.name} />
        ))}
      </Stack>
      <MovieDivider textAlign="left">
        <MovieChip label="Langs" icon={<LanguageIcon />} />
      </MovieDivider>
      <Stack direction={"row"} flexWrap={"wrap"} gap={2}>
        {data.spoken_languages.map((lang) => (
          <MovieChip key={lang.english_name} label={lang.english_name} />
        ))}
      </Stack>
    </Box>
  );
}

export default GeneralInfo;
