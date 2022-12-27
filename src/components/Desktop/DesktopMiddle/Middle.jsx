import { Box, Stack, Typography, Button , List, ListItem, ListItemText, Divider, createTheme, ThemeProvider  } from '@mui/material'
import React from 'react'
import webDesktop from '/src/images/image-web-3-desktop.jpg'

function Middle() {


  const theme = createTheme({
    palette:{
        primary:{
            main:'hsl(4, 100%, 63%)'
        }
    }
})



  return (
    <Stack
    p={3} 
   direction='row'
   spacing={{
    sm: 4, //600
    md:  6 , //900
    lg: 10 //1200
   }}
      >
      
      <Stack >

    <Box component='img' src={webDesktop} sx={{
        width:{
            sm: '440px', //600
            md: '520px', //900
            lg: '940px'  //1200
        },
 height:{
    sm: '200px', //600
    md: '250px', //900
    lg: '380px'  //1200
 }}}/>

   
   <Stack
    direction='row'
    spacing= {{ 
    sm: 15, //600
    md: 8, //900
    lg: 12  //1200
    }}
     p={2.4}>

<Typography variant='h4' sx={{
    width:{
        sm:'110px', //600
        md: '240px', //900
        lg:'410px'  //1200
    },
}}
>
    The Bright Future of Web 3.0?
    </Typography>

     <Stack sx={{
        width:{
            sm:'150px', //600
            md: '200px', //900
            lg: '410px' //1200
        }
        }}>
        <Typography variant='p' sx={{marginBottom:'18px'}} >We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</Typography>

     <ThemeProvider theme={theme}>
     <Button sx={{ width:'150px' , color:'white'}}  variant='contained'>READ MORE</Button>
     </ThemeProvider>

     </Stack>

   </Stack>

 

      </Stack>

     <Box  sx={{
        width:{
            sm:'180px', //600
            md: '200px', //900
            lg: '280px' //1200
        }
        }}
        p={{lg: 1}}
        >

     <Typography variant='h3'>New</Typography>

     <List>

     
<ListItem disablePadding>

  <ListItemText primary='Hydrogen VS Electric Cars' secondary='Will hydrogen-fueled cars ever catch up to EVs?'/>

</ListItem>

<Divider/>

<ListItem disablePadding>

  <ListItemText primary='The Downsides of AI Artistry' secondary='What are the possible adverse effects of on-demand AI image generation?'/>

</ListItem>

<Divider/>


<ListItem disablePadding>

  <ListItemText primary='Is VC Funding Drying Up?' secondary='Private funding by VC firms is down 50% YOY. We take a look at what that means.'/>

</ListItem>


</List>

     </Box>


    </Stack>
  )
}

export default Middle
