import React from 'react'
import { Box, Stack, Typography,  List, ListItem, ListItemText, Divider, createTheme, ThemeProvider  } from '@mui/material'
import computer from '/src/images/image-retro-pcs.jpg'
import laptops from '/src/images/image-top-laptops.jpg'
import gaming from '/src/images/image-gaming-growth.jpg'

function Bottom() {
  return (
    <Stack direction='row' spacing={4}>

        <Stack direction='row' spacing={4} >

          <Box component='img' src={computer} />

          <List >
     
          <ListItem disablePadding>


      <ListItemText primary='Hydrogen VS Electric Cars' secondary='Will hydrogen-fueled cars ever catch up to EVs?'/>

</ListItem>

          </List>
        
        {/* <Box sx={{align:'center'}}>
       
        <Typography>01</Typography>
          <Typography></Typography>
          <Typography></Typography>

        </Box> */}

        </Stack>

        <Box>

    <Box component='img' src={laptops} />

    </Box>

       <Box>

     <Box component='img' src={gaming} />

     </Box>

      
    </Stack>
  )
}

export default Bottom
