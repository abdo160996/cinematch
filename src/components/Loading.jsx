import { Skeleton, Box, Grid } from "@mui/material";
import React from "react";
import { ShowInfoBox, ShowTitle } from "./styledComponents";

function Loading() {
  return (
    <Grid container spacing={4}>
      {Array.from({ length: 4 }).map((movie, index) => (
        <Grid item xs={12} md={6} lg={4} xl={3} key={index}>
          <Box sx={{ position: "relative", width: "340px", marginInline: "auto" }} height={450}>
            <Skeleton width={"100%"} height={"100%"}></Skeleton>
            <ShowInfoBox>
              <ShowTitle>{<Skeleton />}</ShowTitle>
            </ShowInfoBox>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default Loading;
