import React, {useState} from 'react'
import {Box, Typography, Toolbar, IconButton, Drawer, Stack} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

function TopNav() {
  

  return (
    <Box >

      <Toolbar>
        
      <Typography 
       variant='h2' 
       component='div'  
       sx={{flexGrow:1}}>
       W.
       </Typography>

       <IconButton size='small' edge='start' color='inherit' aria-label='menu'>
        <MenuIcon />
       </IconButton>

      </Toolbar>



    </Box>
  )
}

export default TopNav
