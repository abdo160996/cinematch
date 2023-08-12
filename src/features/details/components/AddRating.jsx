import React, { useEffect, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import LoginIcon from "@mui/icons-material/Login";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Box, Button, Checkbox, Chip, CircularProgress, Fade, IconButton, Rating, Stack, Typography } from "@mui/material";
import { useFavMovieAndTVMutation, useGetUserFavMoviesQuery, useGetUserFavTVQuery, useRateMovieAndTvMutation } from "../../../api/moviesApi";
import { useSelector } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom";
import { loggedInSelector,sessionIdSelector } from "../../../redux/UserSlice";

function AddRating() {

  const [rating, setRating] = useState(0.5);

  const [checked, setChecked] = useState(false);

  const { id, mediaType } = useParams();

  const navigate = useNavigate();


  const isLoggedIn = useSelector(loggedInSelector);
  const sessionId = useSelector(sessionIdSelector);

  const [addRating, { isLoading, isSuccess }] = useRateMovieAndTvMutation();
  const [favMovieAndTv] = useFavMovieAndTVMutation();
  const { data: favMovies } = useGetUserFavMoviesQuery(sessionId,{skip:!isLoggedIn});
  const { data: favTv } = useGetUserFavTVQuery(sessionId,{skip:!isLoggedIn});

  const handleRating = (e, newValue) => {
    setRating(newValue);
    addRating({ mediaType, id, sessionId, rating: newValue });
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleFavorite = (event, id) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
      favMovieAndTv({ sessionId, media_type: mediaType, media_id: id, favorite: true });
    } else {
      favMovieAndTv({ sessionId, media_type: mediaType, media_id: id, favorite: false  });
    }
  };

  useEffect(() => {

    if (isLoggedIn) {
    (JSON.stringify(favMovies)?.includes(id) ||  JSON.stringify(favTv)?.includes(id)) && setChecked(true);

    }
 

  }, [favMovies,favTv]);

  return (
    <Box sx={{ textAlign: "center" }}>
      <Stack direction={"column"} alignItems={"center"} justifyContent={"center"} my={2} spacing={1}>
        <Box>

        {!isLoggedIn && (
          <><Typography>
            Sign in to rate this movie{" "}
          </Typography><IconButton onClick={handleLogin}>
              <LoginIcon />
            </IconButton></>
         
        )}
        </Box>
        <Stack direction={"row"} alignItems={"center"}>
        <Rating disabled={isLoading || !isLoggedIn} style={{cursor : isLoggedIn ? "pointer" : "d"}} size="medium" name="user-rating-10" precision={0.5} value={rating} onChange={handleRating} max={10} />
        {isLoading ? (
          <CircularProgress color="success" />
        ) : (
          <Chip
            icon={
              <Fade mountOnEnter in={isSuccess}>
                <DoneIcon />
              </Fade>
            }
            label={`${rating}`}
            sx={{ color: "custom.svgcolor" }}
          ></Chip>
        )}
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<FavoriteIcon />}
          checked={checked}
          disabled={!isLoggedIn}
          onChange={(e) => {
            handleFavorite(e, id);
          }}
          inputProps={{ "aria-label": "controlled" }}
        />
        </Stack>
      </Stack>
    </Box>
  );
}

export default AddRating;
