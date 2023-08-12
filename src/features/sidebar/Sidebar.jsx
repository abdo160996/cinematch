import { Box, Fab, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React, { useState } from "react";

import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";



import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import PhoneNav from "./PhoneNav";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../../redux/sideBarSlice";
import MoviesLinks from "./MoviesLinks";
import TvLinks from "./TvLinks";




function Sidebar() {

  
  const showMobileSideBar = useSelector((state) => state.responsiveSideBar.showMobileSideBar);
  const dispatch = useDispatch();


  function closeSideBar() {
    dispatch(toggleSideBar(false));
  }

  return (
    <>
      <Box sx={mobileSideStyle(showMobileSideBar)}>
        <MySide >
          <List>
            <NavLink to={"/"}>
              {({ isActive }) => (
           
                <ListButton onClick={closeSideBar} sx={{ backgroundColor: isActive ? "custom.activelink" : "transparent" }}>
                  <ListItemIcon>{isActive ? <HomeIcon /> : <HomeOutlinedIcon />}</ListItemIcon>
                  <ListItemText
                    primary={"Home"}
                    primaryTypographyProps={{
                      color: "custom.text",
                      fontSize: 16,
                      fontWeight: "bold",
                      lineHeight: "18px",
                      mb: "2px",
                    }}
                  ></ListItemText>
                </ListButton>
              )}
            </NavLink>
              <MoviesLinks/>
              <TvLinks/>
          </List>
        </MySide>
      </Box>
      <Box
        component={"div"}
        onClick={closeSideBar}
        sx={sideOverlayStyle(showMobileSideBar)}
      ></Box>

      <PhoneNav />
    </>
  );
}

export default Sidebar;

export const ListButton = styled(ListItemButton)(({ theme }) => ({
  "&.Mui-selected": { backgroundColor: theme.palette.custom.bgdark },
  "&.Mui-selected:hover": { backgroundColor: theme.palette.custom.chipbg },
  borderRadius: "1rem",

  marginBottom: "1.5rem",
}));

const MySide = styled(Box)(({ theme }) => ({
  flex: 1,
  height: "100%",
  backgroundColor: theme.palette.custom.primary,
  width: "100%",
  borderRadius: 16,
  padding: 16,
}));



const sideOverlayStyle = (showMobileSideBar) => {
  return { display: showMobileSideBar ? "block" : "none", position: "fixed", zIndex: "20", top: 0, left: 0, bottom: 0, right: 0, backgroundColor: "#2625258f", transition: ".5s" };
};

const mobileSideStyle = (showMobileSideBar) => {
  return {
    width: "220px",
 
    whiteSpace: "nowrap",
    position: { xs: "fixed", md: "sticky",'top':0 },
    zIndex:"100",
    visibility:{ xs: showMobileSideBar ? "visible" : "hidden", md: "visible" },
    transition: ".3s",

    opacity :{ xs: showMobileSideBar ? 1 : 0, md: 1 }
  };
};
