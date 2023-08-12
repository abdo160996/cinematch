import { Box } from "@mui/material";
import TimelapseIcon from "@mui/icons-material/Timelapse";

//Styled Components
import { CategoryChip } from "../../components/styledComponents";

import { useGetUpcomingQuery } from "../../api/moviesApi";
import DataSlider from "../slider/DataSlider";
import Wrapper from "../../components/Wrapper";
import { CheckStatus } from "../../components/CheckStatus";
import { useParams } from "react-router-dom";

function Upcoming() {
  const {mediaType}=useParams()

  const { data, isLoading, isError,isSuccess} = useGetUpcomingQuery(mediaType);

  return (
    <Wrapper>
      <CheckStatus status={{ isLoading, isError, isSuccess }}>
        <CategoryChip label="UPCOMING" icon={<TimelapseIcon color="white" />} />
        <DataSlider data={data} />
      </CheckStatus>
    </Wrapper>
  );
}

export default Upcoming;
