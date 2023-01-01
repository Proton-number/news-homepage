import React from 'react'
import { Box, Stack, Typography, Button , List, ListItem, ListItemText, Divider, createTheme, ThemeProvider  } from '@mui/material'
import webMobile from '/src/images/image-web-3-mobile.jpg'

function MobileMiddle() {

    const theme = createTheme({
        palette:{
            primary:{
                main:'hsl(4, 100%, 63%)'
            }
        }
    })

  return (
    <Box p={3}>
      
    <Stack spacing={4} marginBottom='40px'>
        
        <Box component='img' src={webMobile} />

        
        <Box >

            <Typography variant='h3'>The Bright Future of Web 3.0?</Typography>

            <Typography variant='subtitle2'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</Typography>

        </Box>

        <ThemeProvider theme={theme}>
        <Button
        sx={{width:'150px' , color:'white', textTransform:'uppercase'}}
        variant='contained' disableElevation
        >
            Read More
        </Button>
        </ThemeProvider>

      

    </Stack>

    <Box  p={4} sx={{backgroundColor:'hsl(240, 100%, 6%)'}}>
    <Typography variant='h4'sx={{color:'hsl(31, 80%, 62%)'}} >New</Typography>

<List>


<ListItem disablePadding>

<ListItemText 
disableTypography 
primary={<Typography style={{color:'white'}}>Hydrogen VS Electric Cars</Typography>} 
secondary={<Typography variant='subtitle2' style={{color:'white', opacity:'60%'}}>Will hydrogen-fueled cars ever catch up to EVs?</Typography>}
/>

</ListItem>

<Divider style={{backgroundColor:'white', opacity:'60%'}}/>

<ListItem disablePadding>

<ListItemText 
disableTypography 
primary={<Typography style={{color:'white'}}>The Downsides of AI Artistry</Typography>} 
secondary={<Typography variant='subtitle2' style={{color:'white', opacity:'60%'}}>What are the possible adverse effects of on-demand AI image generation?</Typography>}
/>

</ListItem>

<Divider style={{backgroundColor:'white', opacity:'60%'}}/>


<ListItem disablePadding>

<ListItemText 
disableTypography 
primary={<Typography style={{color:'white'}}>Is VC Funding Drying Up?</Typography>} 
secondary={<Typography variant='subtitle2' style={{color:'white', opacity:'60%'}}>Private funding by VC firms is down 50% YOY. We take a look at what that means.</Typography>}
/>

</ListItem>


</List>
    </Box>

    </Box>
  )
}

export default MobileMiddle
