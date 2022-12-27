import React from 'react'
import {Box, Typography, Toolbar} from '@mui/material'


function DesktopNav() {
  return (
    <Box  position='relative' >
      
      <Toolbar>

        {/* <Box component='img' src={logo} sx={{flexGrow:2}} /> */}

    <Typography 
    variant='h1' 
     sx={{flexGrow:2}}>
            W.
        </Typography>

        <Typography 
        variant='p'   
        sx={{flexGrow:.4}}>
            Home
        </Typography>

        <Typography 
        variant='p'   
        sx={{flexGrow:0.4}}>
            New
        </Typography>

        <Typography 
        variant='p'   
          sx={{flexGrow:.4}}>
            Popular
        </Typography>

        <Typography 
        variant='p'     
         sx={{flexGrow:.4}}>
            Trending
        </Typography>

        <Typography 
        variant='p'    
         sx={{flexGrow:.4}}>
        Categories
        </Typography>


    </Toolbar>


    </Box>
  )
}

export default DesktopNav
