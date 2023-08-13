import React, { Suspense } from "react";
import Sidebar from "../features/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { Stack, Box, Slide, } from "@mui/material";

import Navbar from "../features/navbar/Navbar";
import CustomizedBreadcrumbs from "./CustomizedBreadCrumbs";
import QuickSearch from "../features/search/QuickSearch";
import { useSelector } from "react-redux";

function Layout() {
  const showSearchBar = useSelector((state) => state.searchBar.showSearch);

  return (
    <Box mx={1}>
      <Stack direction={"row"} spacing={{ xs: 0, md: 2 }} alignItems={"start"} mt={2}>
        <Sidebar />
        <Box overflow={"hidden"} flex={1}>
          <Navbar />
          <Slide direction="down" mountOnEnter unmountOnExit in={showSearchBar}>
            <div>
              <QuickSearch />
            </div>
          </Slide>
          <CustomizedBreadcrumbs />
          <Suspense fallback={"Loading..."}>
            <Outlet />
          </Suspense>
        </Box>
      </Stack>
    </Box>
  );
}

export default Layout;
