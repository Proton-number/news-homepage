import React from 'react'
import { Box, Stack, Typography} from '@mui/material'
import computer from '/src/images/image-retro-pcs.jpg'
import laptops from '/src/images/image-top-laptops.jpg'
import gaming from '/src/images/image-gaming-growth.jpg'


function MobileBottom() {

  const theme = createTheme({
    palette:{
        primary:{
            main:'hsl(4, 100%, 63%)'
        }
    }
})


  return (
    <>

      <Stack spacing={3} p={2}>
     
       <Stack direction='row' spacing={3}>

        <Box 
        component='img' 
        src={computer} 
        sx={{
          width: '200px',
          height: '160px'
          }} />

        <Box>
        <Typography variant='h4' sx={{opacity:'30%'}}>01</Typography>
         <Typography variant='h5'>Reviving Retro PCs</Typography>
         <Typography variant='p' sx={{opacity:'40%'}}>What happens when old PCs are given modern upgrades?</Typography>
        </Box>


       </Stack>

       <Stack direction='row' spacing={3}>

<Box 
component='img' 
src={laptops} 
sx={{
  width: '200px',
  height: '160px'
  }} />

<Box>
<Typography variant='h4'  sx={{opacity:'30%'}}>02</Typography>
         <Typography variant='h5'>Top 10 Laptops of 2022</Typography>
         <Typography variant='p' sx={{opacity:'40%'}}>Our best picks for various needs and budgets.</Typography>
</Box>


</Stack>


<Stack direction='row' spacing={3}>

<Box 
component='img' 
src={gaming} 
sx={{
  width: '200px',
  height: '160px'
  }} />

<Box>
<Typography variant='h4'  sx={{opacity:'30%'}}>03</Typography>
         <Typography variant='h5'>The Growth of Gaming</Typography>
         <Typography variant='p'  sx={{opacity:'40%'}}>How the pandemic has sparked fresh opportunities.</Typography>
</Box>


</Stack>

    


      </Stack>


    </>
  )
}

export default MobileBottom
