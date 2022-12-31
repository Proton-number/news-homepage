import React from 'react'
import { Box, createTheme, Stack, Typography, responsiveFontSizes, ThemeProvider,  } from '@mui/material'
import computer from '/src/images/image-retro-pcs.jpg'
import laptops from '/src/images/image-top-laptops.jpg'
import gaming from '/src/images/image-gaming-growth.jpg'


function Bottom() {


  let theme = createTheme();

  theme = responsiveFontSizes(theme)



  return (
    <Stack 
    direction='row' 
    spacing={{
      sm: 2 //600
    }}
    p={{
      md: 4, //900
      lg: 8 //1200
    }}
    >

        <Stack 
        spacing={{
          sm: 1.8, //600
          lg: 5 //1200
        }} 
        direction='row'>

          <Box 
          component='img'
           src={computer} 
           sx={{
            width:{
                sm: '120px', //600
                lg: '200px'  //1200
            }, 
            height:{
              sm: '128px', //600
              lg: '196px' //1200
            }
          }}
           />

         
<Stack 
 sx={{
  width:{
    sm: '120px', //600
    md: '140px' , //900
    lg: '180px' //1200
  }
 }}
 >
       
      <ThemeProvider theme={theme}>
      <Typography variant='h4'>01</Typography>
         <Typography variant='h5'>Reviving Retro PCs</Typography>
         <Typography variant='p'>What happens when old PCs are given modern upgrades?</Typography>
      </ThemeProvider>

       </Stack>

        </Stack>

        <Stack 
         spacing={{
          sm: 1.8, //600
          lg: 3 //1200
        }} 
        direction='row'
        >

    <Box 
    component='img' 
    src={laptops} 
    sx={{
      width:{
          sm: '110px', //600
          lg: '200px'  //1200
      }, 
      height:{
              sm: '121px', //600
        lg: '200px' //1200
      }
    }}
    />

<Stack 
p={{
  lg: 1.5 //1200
}}
 sx={{
  width:{
    sm: '128px', //600
    md: '140px', //900
    lg: '186px' //1200
  }
 }}
 >
       
      <ThemeProvider theme={theme}>

      <Typography variant='h3'>02</Typography>
         <Typography variant='h5'>Top 10 Laptops of 2022</Typography>
         <Typography variant='p'>Our best picks for various needs and budgets.</Typography>

      </ThemeProvider>

       </Stack>


    </Stack>

       <Stack 
        spacing={{
          sm: 1.8, //600
          lg: 2 //1200
        }} 
       direction='row'
       >

     <Box 
     component='img' 
     src={gaming} 
     sx={{
      width:{
         sm: '110px', //600
          lg: '200px'  //1200
      }, 
      height:{
         sm: '121px', //600
        lg: '200px' //1200
      }
    }}
     />

<Stack 
p={{
  lg: 2 //1200
}}
 sx={{
  width:{
    sm: '100px', //600
    md: '140px', //900
    lg: '200px' //1200
  }
 }}
 >
       
      <ThemeProvider theme={theme}>

      <Typography variant='h3'>03</Typography>
         <Typography variant='h5'>The Growth of Gaming</Typography>
         <Typography variant='p'>How the pandemic has sparked fresh opportunities.</Typography>

      </ThemeProvider>

       </Stack>

     </Stack>

      
    </Stack>
  )
}

export default Bottom
