import { Box } from '@mui/material'
import React from 'react'
import Bottom from './DesktopBottom/Bottom'
import Middle from './DesktopMiddle/Middle'
import DesktopNav from './DesktopTop/DesktopNav'


function Desktop() {
  return (
    <Box p={5}>
      <DesktopNav />
      <Middle />
      <Bottom />
    </Box>
  )
}

export default Desktop
