import {  Stack } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircleFilled";
import Upcoming from "./Upcoming";

import { useGetPlayNowQuery } from "../../api/moviesApi";

import { CategoryChip } from "../../components/styledComponents";

import DataSlider from "../slider/DataSlider";
import Wrapper from "../../components/Wrapper";
import { CheckStatus } from "../../components/CheckStatus";
import { useParams } from "react-router-dom";

function NowPlaying() {
  const {mediaType}=useParams()

  const { data, isLoading,isError,isSuccess } = useGetPlayNowQuery(mediaType);

  return (
    <Stack direction={"column"} spacing={2} overflow={"hidden"}>
             <CheckStatus status = {{isLoading,isError,isSuccess}}>
      <Wrapper>
        <CategoryChip label="Playing now" icon={<PlayCircleIcon color="white" />} />
        <DataSlider data={data} />
      </Wrapper>
      {mediaType === "movie" && <Upcoming />}
      </CheckStatus>
    </Stack>
  );
}

export default NowPlaying;
