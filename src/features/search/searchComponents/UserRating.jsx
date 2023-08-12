import { Box, Chip, InputAdornment, Rating, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMaxVoteAverage, updateMinVoteCount } from "../slices/advancedSearchSlice";
import PollIcon from "@mui/icons-material/Poll";
function UserRating() {
  const minVoteCount = useSelector((state) => state.advancedSearch["vote_count.gte"]);
  const minVoteAverage = useSelector((state) => state.advancedSearch["vote_average.gte"]);
  const maxVoteAverage = useSelector((state) => state.advancedSearch["vote_average.lte"]);
  const dispatch = useDispatch();
  function handleVoteAverage(e, newValue) {
    dispatch(updateMaxVoteAverage(newValue));
  }

  function handleVoteCount(e) {
    dispatch(updateMinVoteCount(e.target.value));
  }
  return (
    <Box flex={1} width={1}>
      <Typography component="legend" marginY={1}>
        User Rating{" "}
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={"center"} justifyContent={"space-between"}>
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <Rating size="medium" name="user-rating-10" precision={0.5} value={maxVoteAverage} onChange={handleVoteAverage} max={10} />
          <Chip label={`${maxVoteAverage || 0}`} sx={{ color: "custom.svgcolor" }}></Chip>
        </Stack>
        <Box width={1}>
          <TextField
            fullWidth
            onChange={handleVoteCount}
            id="vote_count"
            label="Min No. of votes"
          value={ minVoteCount}
            InputProps={{
             
              startAdornment: (
                <InputAdornment position="start">
                  <PollIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default UserRating;
