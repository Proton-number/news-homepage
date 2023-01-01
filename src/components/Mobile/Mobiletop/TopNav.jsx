import React, {useState} from 'react'
import {Box, Typography, Toolbar, IconButton, Drawer, Stack} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '/src/images/logo.svg'


function TopNav() {
    const [isDrawerOpen, setisDrawerOpen] = useState(false);
  

  return (
    <Box >

      <Toolbar>

      <Typography 
       variant='h2' 
       component='div'  
       sx={{
        fontFamily: 'DM Serif Display',
        flexGrow:1
        }}>
       W.
       </Typography>

       <IconButton 
       edge='start' 
       color='inherit' 
       aria-label='menu'
       onClick={()=> setisDrawerOpen(true)}
       >
        <MenuIcon fontSize='large'  />
       </IconButton>

      </Toolbar>

    {/* DRAWER FOR SIDE MENU */}


      <Drawer 
      anchor='right' 
      open={isDrawerOpen} 
      onClose={() => setisDrawerOpen(false)}
      >

    <Box width='250px' textAlign='right' role='presentation'>
      
      <Toolbar>

      <Box 
       component='div'  
       sx={{flexGrow:6}}> 
       </Box>

       <IconButton
        edge='start' 
        color='inherit' 
        aria-label='logo'
         onClick={()=> setisDrawerOpen(false)}
       >
      <CloseIcon   fontSize='large'  />
       </IconButton>

      </Toolbar>

      
<Stack spacing={3} style={{ textAlign:'left', padding:'35px' }}>
    <Typography variant='h6' >Home</Typography>
    <Typography  variant='h6' >New</Typography>
    <Typography variant='h6' >Popular</Typography>
    <Typography variant='h6' >Trending</Typography>
    <Typography variant='h6' >Categories</Typography>
   </Stack>



    </Box>


      </Drawer>



    </Box>
  )
}

export default TopNav
