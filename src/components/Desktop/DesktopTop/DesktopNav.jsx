import React from 'react'
import {Box, Typography, Toolbar} from '@mui/material'
import { motion } from 'framer-motion'


function DesktopNav() {
  return (
    <Box  position='relative' >
      
      <Toolbar>


    <Typography 
    variant='h1' 
     sx={{
      fontFamily: 'DM Serif Display',
      flexGrow:2
    }}
      >
            W.
        </Typography>

        <Typography 
        variant='p'   
        component={motion.h3}
         whileHover={{textDecoration:'underline', y:-5}}
        transition={{delay: .3 }}
        sx={{flexGrow:.4}}>
            Home
        </Typography>

        <Typography 
        variant='p'   
         component={motion.h3}
         whileHover={{textDecoration:'underline', y:-5}}
        transition={{delay: .3 }}
        sx={{flexGrow:0.4}}>
            New
        </Typography>

        <Typography 
        variant='p'  
         component={motion.h3}
         whileHover={{textDecoration:'underline', y:-5}}
        transition={{delay: .3 }} 
          sx={{flexGrow:.4}}>
            Popular
        </Typography>

        <Typography 
        variant='p' 
         component={motion.h3}
         whileHover={{textDecoration:'underline', y:-5}}
        transition={{delay: .3 }}    
         sx={{flexGrow:.4}}>
            Trending
        </Typography>

        <Typography 
        variant='p' 
         component={motion.h3}
         whileHover={{textDecoration:'underline', y:-5}}
        transition={{delay: .3 }}   
         sx={{flexGrow:.4}}>
        Categories
        </Typography>


    </Toolbar>


    </Box>
  )
}

export default DesktopNav
