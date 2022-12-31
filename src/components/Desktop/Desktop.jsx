import { Box } from '@mui/material'
import React from 'react'
import Bottom from './DesktopBottom/Bottom'
import Middle from './DesktopMiddle/Middle'
import DesktopNav from './DesktopTop/DesktopNav'
import './Desktop.css'



function Desktop() {
  return (
    <Box
    id='desktop-view'
     p={{
      sm:1.5, //600
      lg: 4 //1200
    }}>
      <DesktopNav />
      <Middle />
      <Bottom />
    </Box>
  )
}

export default Desktop
