import * as React from "react";

import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { useDispatch, useSelector } from "react-redux";
import { updateEndDate,  updateStartDate} from "../slices/advancedSearchSlice";
import { Box, Stack } from "@mui/material";
import { useEffect } from "react";
import dayjs from "dayjs";

export default function MoviesYear() {
  const dispatch = useDispatch();

  const searchType = useSelector((state) => state.searchBar.filterSearchType);

  const [startDate, setStartDate] = React.useState(dayjs(Date.now()).subtract(1, "year"));
  const [endDate, setEndDate] = React.useState(dayjs(Date.now()));

  function handleStartDate(newValue) {
    setStartDate(newValue);
  }

  function handleEndDate(newValue) {
    setEndDate(newValue);
  }

  useEffect(() => {

  dispatch(updateStartDate({searchType,'date':startDate.format("YYYY-MM-DD")})) 
  dispatch(updateEndDate({searchType,'date':endDate.format("YYYY-MM-DD")})) 
  }, [startDate,endDate,searchType]);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]} sx={{ flex: 1 }}>
        <Stack direction={"row"} alignItems={"center"} spacing={2} sx={{ flex: 1 }} >
          <Box flexGrow={1}>
            <DemoItem label="Release Date - Start">
              <DatePicker value={startDate} onChange={handleStartDate} />
            </DemoItem>
          </Box>
          <Box flexGrow={1}>
            <DemoItem label=" End">
              <DatePicker value={endDate} onChange={handleEndDate} />
            </DemoItem>
          </Box>
        </Stack>
      </DemoContainer>
    </LocalizationProvider>
  );
}
