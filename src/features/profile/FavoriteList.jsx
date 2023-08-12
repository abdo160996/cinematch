import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import DataSlider from "../slider/DataSlider";

import { CategoryChip } from "../../components/styledComponents";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RateIcon from "@mui/icons-material/RateReview";
import Wrapper from "../../components/Wrapper";
import { useGetUserFavMoviesQuery, useGetUserFavTVQuery, useGetUserRatedMoviesQuery, useGetUserRatedTVQuery } from "../../api/moviesApi";
import Loading from "../../components/Loading";
import { Box, Tab, Tabs } from "@mui/material";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import { sessionIdSelector } from "../../redux/UserSlice";
function FavoriteList() {
  const sessionId = useSelector(sessionIdSelector);
  const { data: favMovies, favMovieLoading } = useGetUserFavMoviesQuery(sessionId);
  const { data: ratedMovies ,ratedMoviesLoading} = useGetUserRatedMoviesQuery(sessionId);
  const { data: ratedTv ,ratedTvLoading} = useGetUserRatedTVQuery(sessionId);
  const { data: favTv ,favTvLoading} = useGetUserFavTVQuery(sessionId);
  const [value, setValue] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {

    setValue(0);

    }, []);
  return (
    <>
      <Wrapper>
        <Box my={4}>
        <TabContext value={value} >
          <TabList onChange={handleChange}   variant="scrollable" scrollButtons="auto">
            <Tab label="Favorite Movies List" />
            <Tab label="Rated Movies List" />
            <Tab label="Favorite tv List" />
            <Tab label="Rated tv List" />
          </TabList>

          <TabPanel value={0} index={0}>
            <CategoryChip label="Favorite Movies List" icon={<FavoriteIcon color="white" />} />
            {favMovieLoading ? <Loading /> : <DataSlider data={favMovies} />}
          </TabPanel>

          <TabPanel value={1} index={1}>
            <CategoryChip label="Rated Movies List" icon={<FavoriteIcon color="white" />} />
            {ratedMoviesLoading ? <Loading /> : <DataSlider data={ratedMovies} />}
          </TabPanel>
          <TabPanel value={2} index={2}>
            <CategoryChip label="Favorite tv List" icon={<FavoriteIcon color="white" />} />
            {favTvLoading ? <Loading /> : <DataSlider data={favTv} />}
          </TabPanel>

          <TabPanel value={3} index={3}>
            <CategoryChip label="Rated tv List" icon={<RateIcon color="white" />} />
            {ratedTvLoading ? <Loading /> : <DataSlider data={ratedTv} />}
          </TabPanel>
        </TabContext>
        </Box>
      </Wrapper>
    </>
  );
}

export default FavoriteList;
