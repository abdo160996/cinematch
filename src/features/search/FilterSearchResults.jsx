import React, { useState } from "react";
import { useGetMoviesAndTvByFilterQuery } from "../../api/moviesApi";

import { Box, Pagination, PaginationItem, Stack } from "@mui/material";

import Loading from "../../components/Loading";
import NotFound from "../../components/NotFound";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import DataGrid from "../../components/DataGrid";
import LinearProgress from "@mui/material/LinearProgress";

import { useSelector } from "react-redux";
import Wrapper from "../../components/Wrapper";
import { CheckStatus } from "../../components/CheckStatus";

function FilterSearchResults() {
  const filters = useSelector((state) => state.advancedSearch);
  const filterSearchType = useSelector((state) => state.searchBar.filterSearchType);

  const [pageNum, setPageNum] = useState(1);

  const handlePageChange = (_, value) => {
    setPageNum(value);
  };
  const { data: filteredData, isLoading, isFetching, isError,isSuccess } = useGetMoviesAndTvByFilterQuery({ filters, filterSearchType, pageNum });

  return (
    <Wrapper>
      <CheckStatus status={{ isLoading, isFetching, isError, isSuccess }}>
        <Stack spacing={2} marginY={4} alignItems={"center"}>
          <Pagination onChange={handlePageChange} disabled={isFetching} shape="rounded" count={5} renderItem={(item) => <PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />} />
        </Stack>
        <DataGrid data={filteredData} />
      </CheckStatus>
    </Wrapper>
  );
}

export default FilterSearchResults;
