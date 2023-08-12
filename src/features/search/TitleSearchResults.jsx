import React, { useState } from "react";
import { useGetMovieAndTvByKeywordQuery,} from "../../api/moviesApi";

import {  Pagination, PaginationItem, Stack } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


import { useSelector } from "react-redux";
import { useDebounce } from "@uidotdev/usehooks";
import DataGrid from "../../components/DataGrid";
import Wrapper from "../../components/Wrapper";
import { CheckStatus } from "../../components/CheckStatus";


function TitleSearchResults() {
  const searchValue = useSelector((state) => state.searchBar.searchValue);
  const searchType = useSelector((state) => state.searchBar.searchType);

  const debouncedValue = useDebounce(searchValue, 500);

  const [pageNum, setPageNum] = useState(1);
  
  const { data, isLoading, isFetching, isError,isSuccess} = useGetMovieAndTvByKeywordQuery({searchType, pageNum, debouncedValue }, { skip: (debouncedValue === "")});

  const handlePageChange = (_, value) => {
    setPageNum(value);
  };


  return (
    <Wrapper>
             <CheckStatus status = {{isLoading,isFetching,isError,isSuccess}}>
      <Stack spacing={2} marginY={4} alignItems={"center"}>
        <Pagination
          onChange={handlePageChange}
          disabled={debouncedValue === ""}
          shape="rounded"
          count={5}
          renderItem={(item) => <PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />}
        />
      </Stack>
       <DataGrid data={data} />
       </CheckStatus>
    </Wrapper>
  );
}

export default TitleSearchResults;
