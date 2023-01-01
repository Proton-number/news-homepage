import { Box } from '@mui/material'
import React from 'react'
import './Mobile.css'
import MobileBottom from './MobileBottom/MobileBottom'
import MobileMiddle from './MobileMiddle/MobileMiddle'
import TopNav from './Mobiletop/TopNav'


function Mobile() {
  return (
    <Box id='mobile-view'>
      <TopNav />
      <MobileMiddle />
      <MobileBottom />
    </Box>
  )
}

export default Mobile
