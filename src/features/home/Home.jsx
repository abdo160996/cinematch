import { Box, Stack } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircleFilled";
import WhatshotIcon from "@mui/icons-material/Whatshot";

import { CategoryChip } from "../../components/styledComponents";
import Loading from "../../components/Loading";

import DataSlider from "../slider/DataSlider";
import { useGetTrendingTvAndMoviesQuery } from "../../api/moviesApi";
import Wrapper from "../../components/Wrapper";
import { CheckStatus } from "../../components/CheckStatus";


function Home() {
  const { moviesData, seriesData, isLoading, isError ,isSuccess} = useGetTrendingTvAndMoviesQuery(undefined, {
    selectFromResult: ({ data, isLoading,isError,isSuccess }) => {
      return {
        moviesData: data?.filter((movie) => movie.media_type === "movie"),
        seriesData: data?.filter((series) => series.media_type === "tv"),
        isLoading,isError,isSuccess
      };
    },
  });



  return (
    <Box>
      <CheckStatus status = {{isLoading,isError,isSuccess}}>
      <Stack direction={"column"} spacing={2} overflow={"hidden"}>
        <Wrapper>
          <CategoryChip label="Trending Movies" icon={<PlayCircleIcon color="white" />} />
          <DataSlider data={moviesData} />
        </Wrapper>
        <Wrapper>
          <CategoryChip label="Trending TV shows" icon={<WhatshotIcon color="white" />} />
          <DataSlider data={seriesData} />
        </Wrapper>
      </Stack>
      </CheckStatus>
    </Box>
  );
}

export default Home;
