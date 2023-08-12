import React from 'react'
import { Link,  } from 'react-router-dom'
import errorPic from "../assets/error_page.svg"
import { Button, Stack } from '@mui/material'
function NotFound() {
  
  return (
    <Stack alignItems={"center"}>
      <img src={errorPic} width={"400px"}/>
       <Link to={"/"}><Button variant='outlined'>Go Home</Button></Link>
    </Stack>
   
  )
}

export default NotFound