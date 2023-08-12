import { Box } from '@mui/material'
import React from 'react'

function Wrapper({children}) {
  return (
    <Box  padding={3} position={"relative"} borderRadius={4} mt={4} bgcolor={"custom.primary"}>
        {children}
    </Box>
  )
}

export default Wrapper