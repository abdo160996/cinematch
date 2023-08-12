import { useState } from "react";
import { Box, LinearProgress, Pagination, PaginationItem, Stack } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useGetTrendingQuery } from "../../api/moviesApi";
import DataGrid from "../../components/DataGrid";
import Wrapper from "../../components/Wrapper";
import { CheckStatus } from "../../components/CheckStatus";
import { useParams } from "react-router-dom";


function Trending() {
  const [pageNum, setPageNum] = useState(1);
  const {mediaType}=useParams()
  const { data, isLoading, isFetching, isError, isSuccess } = useGetTrendingQuery({mediaType,pageNum});
  const handlePageChange = (_, value) => {
    setPageNum(value);
  };

  return (
    <Wrapper>
       <CheckStatus status = {{isLoading,isFetching,isError,isSuccess}}>
        
          <Stack spacing={2} marginY={4} alignItems={"center"}>
            <Pagination onChange={handlePageChange} shape="rounded" disabled={isLoading} count={5} renderItem={(item) => <PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />} />
          </Stack>

          <DataGrid data={data} />
    
        </CheckStatus>
    </Wrapper>
  );
}

export default Trending;
