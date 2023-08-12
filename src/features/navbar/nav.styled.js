import PlayCircle from "@mui/icons-material/PlayCircle"
import {  Stack, styled } from "@mui/material";

const MyLogo = styled(PlayCircle)(({theme})=>({
    borderRadius:"50%",
    
    color:theme.palette.primary.main,
   fontSize:"2rem",
  
  transition:"all .3s ease-in-out",
    "&:hover":{ scale:"1.3"}
  }))
  
  const MyNav = styled(Stack)(({theme})=>({
    padding:"1rem",
    backgroundColor:theme.palette.custom.primary,
    alignItems:"center",
    justifyContent:"space-between",
    borderRadius:"1rem"
  }))

  export {MyLogo,MyNav}