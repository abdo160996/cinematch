import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";

import {  ListItemIcon, ListItemText, Typography } from "@mui/material";
import MoviesIcon from "@mui/icons-material/MovieFilter";
import MoviesOutlinedIcon from "@mui/icons-material/MovieFilterOutlined";

import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";

import MovieIcon from "@mui/icons-material/Movie";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";

import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import WhatshotIcon from "@mui/icons-material/Whatshot";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { ListButton } from './Sidebar';
import { toggleSideBar } from '../../redux/sideBarSlice';


const movieslinks = [
    { activeIcon: <MovieIcon />, notActiveIcon: <MovieOutlinedIcon />, label: "Feed", url: "feed/movie" },
    { activeIcon: <VideoLibraryIcon />, notActiveIcon: <VideoLibraryOutlinedIcon />, label: "Top Rated", url: "top_rated/movie" },
    { activeIcon: <WhatshotOutlinedIcon />, notActiveIcon: <WhatshotIcon />, label: "Trending", url: "trending/movie" },
    { activeIcon: <FavoriteOutlinedIcon />, notActiveIcon: <FavoriteBorderOutlinedIcon />, label: "Popular", url: "popular/movie" },
  ];
function MoviesLinks() {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
  
    function handleChange() {
      setOpen(!open);
    }
  
    function closeSideBar() {
      dispatch(toggleSideBar(false));
    }
  
  return (
    <>
    <ListButton alignItems="center" onClick={handleChange} sx={{ p: 2 }}>
    <ListItemIcon>{open ? <MoviesIcon /> : <MoviesOutlinedIcon />}</ListItemIcon>
    <ListItemText
      primary={"Movies"}
      primaryTypographyProps={{
        color: "custom.text",
        fontSize: 16,
        fontWeight: "bold",
        lineHeight: "18px",
        mb: "2px",
      }}
      sx={{ my: 0 }}
    />
    <KeyboardArrowDown sx={{ mr: -1, opacity: 1, transform: open ? "rotate(-180deg)" : "rotate(0)", transition: "0.5s" }} />
  </ListButton>

  {open &&

    movieslinks.map((item) => (
     
      <NavLink key={item.label} to={item.url} end>
        {({ isActive }) => (
          <ListButton onClick={closeSideBar} sx={{ backgroundColor: isActive ? "custom.activelink" : "transparent" }}>
            <ListItemIcon>{isActive ? item.activeIcon : item.notActiveIcon}</ListItemIcon>
            <ListItemText>
              <Typography variant="body1" fontWeight={600} color={"custom.text"}>
                {item.label}
              </Typography>
            </ListItemText>
          </ListButton>
        )}
      </NavLink>
      
    ))}
    </>
  )
}

export default MoviesLinks