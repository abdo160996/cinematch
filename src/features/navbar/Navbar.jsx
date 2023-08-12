import { Badge, Typography, Stack, IconButton, Avatar } from "@mui/material";


import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import { MyNav } from "./nav.styled";

import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../redux/darkModeSlice";
import { showSearchBar } from "../search/slices/searchSlice";
import { Menu } from "@mui/icons-material";
import { toggleSideBar } from "../../redux/sideBarSlice";
import { Link } from "react-router-dom";
import TopMenu from "../profile/TopMenu";
import { loggedInSelector } from "../../redux/UserSlice";
function Navbar() {
  const showSearch = useSelector((state) => state.searchBar.showSearch);
  const darkMode = useSelector((state) => state.darkMode);
  const isLoggedIn = useSelector(loggedInSelector);

  const dispatch = useDispatch();

  return (
    <MyNav spacing={2} direction={"row"} position={"sticky"} top={0} zIndex={5}>
      <IconButton onClick={() => dispatch(toggleSideBar(true))} sx={{ display: { xs: "block", md: "none" } }}>
        <Menu />
      </IconButton>
      <Link to={"/"}>
        <Typography color={"primary"} fontWeight={800}>
          CineMatch
        </Typography>
      </Link>
      <Stack>
        <IconButton onClick={() => dispatch(showSearchBar())}>{showSearch ? <SearchOffIcon /> : <SearchIcon />}</IconButton>
      </Stack>
      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <IconButton onClick={() => dispatch(changeMode())} >
        {darkMode ? <LightModeIcon/>: <DarkModeIcon />}  
        </IconButton>
        {isLoggedIn && "hello!"}
        <TopMenu/>
      </Stack>
    </MyNav>
  );
}

export default Navbar;
