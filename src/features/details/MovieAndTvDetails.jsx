import { useParams } from "react-router-dom";

import { useGetMovieAndTvDetailsQuery } from "../../api/moviesApi";

import AllDetails from "./components/AllDetails";
import Wrapper from "../../components/Wrapper";

import NotFound from "../../components/NotFound";
import { LinearProgress } from "@mui/material";

function MovieAndTvDetails() {
  const { id, mediaType } = useParams();

  const { data, isError, isLoading, isSuccess } = useGetMovieAndTvDetailsQuery({ mediaType, id });

  return (
    <Wrapper>
   {isLoading ? <LinearProgress /> : isError ? <NotFound /> : isSuccess ? <AllDetails showData={data} /> : <NotFound/>}
    </Wrapper>
  );
}

export default MovieAndTvDetails;
