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
    p={4} 
   direction='row'
   spacing={{
    sm: 2, //600
    md:  6 , //900
    lg: 6 //1200
   }}
      >
      
      <Stack spacing={{md:2}}>

    <Box component='img' src={webDesktop} 
    sx={{
        width:{
            sm: '440px', //600
            md: '560px', //900
            lg: '940px'  //1200
        },
        height:{
    sm: '200px', //600
    md: '320px', //900
    lg: '380px'  //1200
            }}}
 />

   
   <Stack
    direction='row'
    spacing= {{ 
    sm: 15, //600
    md: 8, //900
    lg: 12  //1200
    }}
     p={2.4}>

<Typography 
variant='h3' 
style={{fontWeight: 600}}
sx={{
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
        }}

        >
        <Typography variant='body1'  sx={{marginBottom:'18px'}} >We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</Typography>

     <ThemeProvider theme={theme}>
     <Button sx={{ width:'150px' , color:'white'}}  variant='contained' disableElevation>READ MORE</Button>
     </ThemeProvider>

     </Stack>

   </Stack>

 

      </Stack>

     <Stack  sx={{
          width:{
            lg: '280px'
          },
        backgroundColor:'hsl(240, 100%, 6%)'
        }}
        p={{
          sm: 2.5, //600
          md: 3, //900
          lg: 5 //1200
        }}
        spacing={{
          md:1, //900
          lg: 1 //1200
        }}
        >

     <Typography variant='h3' sx={{color:'hsl(31, 80%, 62%)'}}>New</Typography>

     <List >

     
<ListItem disablePadding>

<ListItemText 
disableTypography 
primary={<Typography variant='h5' style={{color:'white'}}>Hydrogen VS Electric Cars</Typography>} 
secondary={<Typography variant='subtitle1' style={{color:'white', opacity:'60%'}}>Will hydrogen-fueled cars ever catch up to EVs?</Typography>}
/>

</ListItem>

<Divider style={{backgroundColor:'white', opacity:'60%'}}/>

<ListItem disablePadding>


<ListItemText 
disableTypography 
primary={<Typography variant='h5' style={{color:'white'}}>The Downsides of AI Artistry</Typography>} 
secondary={<Typography variant='subtitle1' style={{color:'white', opacity:'60%'}}>What are the possible adverse effects of on-demand AI image generation?</Typography>}
/>

  
</ListItem>

<Divider style={{backgroundColor:'white', opacity:'60%'}}/>


<ListItem disablePadding>

<ListItemText 
disableTypography 
primary={<Typography variant='h5' style={{color:'white'}}>Is VC Funding Drying Up?</Typography>} 
secondary={<Typography variant='subtitle1' style={{color:'white', opacity:'60%'}}>Private funding by VC firms is down 50% YOY. We take a look at what that means.</Typography>}
/>


</ListItem>


</List>

     </Stack>


    </Stack>
  )
}

export default Middle
