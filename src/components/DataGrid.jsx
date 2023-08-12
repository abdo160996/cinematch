import React from "react";
import { Grid, Box, Grow,  } from "@mui/material";
import { MediaTypeChip, ShowDateChip, ShowInfoBox, ShowTitle } from "./styledComponents";


import { POSTER_500, POSTER_BACKUP } from "../constants/constants";
import { Link, useParams } from "react-router-dom";
import { generatePath } from "../features/slider/DataSlider";

function DataGrid({ data }) {
  
  const { mediaType } = useParams();
  return (
    <Grid container spacing={4}>
      {data
        .filter((show) => show["original_language"] !== "ko")
        .map((show, index) => (
          <Grow in mountOnEnter unmountOnExit  key={index}>
            <Grid item show xs={12} md={6} lg={3}>
              <Link to={`${generatePath(show,mediaType)}${show.id}`}>
                <Box sx={{ position: "relative" }}>
                  <ShowDateChip label={show.release_date?.split("-")[0] || show.first_air_date?.split("-")[0]} size="medium" />
             
                  {show.media_type && <MediaTypeChip label={show.media_type === "movie" ? "Movie" : "TV" } size="medium" /> }
                  <img width={"100%"} height={"100%"} loading="lazy" style={{ objectFit: "cover", borderRadius: "1rem", filter: "blur(.5px)" }} src={show.poster_path ? POSTER_500 + show.poster_path : POSTER_BACKUP} />
                  <ShowInfoBox>
                    <ShowTitle>{show.title || show.name}</ShowTitle>
                  </ShowInfoBox>
                </Box>
              </Link>
            </Grid>
          </Grow>
        ))}
    </Grid>
  );
}

export default DataGrid;
