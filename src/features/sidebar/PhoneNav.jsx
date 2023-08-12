
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'

import { Box, SpeedDial, SpeedDialAction,SpeedDialIcon } from '@mui/material';

import AssistantIcon from "@mui/icons-material/Assistant";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";



function PhoneNav() {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
  return (
    <Box sx={{ display: { md: "none" } }}>
    <SpeedDial ariaLabel="SpeedDial controlled" sx={{ position: "fixed", bottom: 20, right: 30 }} icon={<SpeedDialIcon />} onClose={handleClose} onOpen={handleOpen} open={open}>
      <SpeedDialAction
        icon={<HomeIcon />}
        tooltipTitle={"Home"}
        onClick={() => {
          navigate("/");
        }}
      />
      <SpeedDialAction
        icon={<FavoriteOutlinedIcon />}
        tooltipTitle={"Popular"}
        onClick={() => {
          navigate("popular");
        }}
      />
      <SpeedDialAction
        icon={<WhatshotIcon />}
        tooltipTitle={"Trending"}
        onClick={() => {
          navigate("trending");
        }}
      />
    </SpeedDial>
  </Box>
  )
}

export default PhoneNav