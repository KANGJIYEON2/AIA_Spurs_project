import { Box, Typography } from '@mui/material'
import React from 'react'
import Userpage from './userpage/page'
import Contents from './contentspage/page'
import Events from './eventspage/page'


const adminpage = () => {
  return (
    <Box>
   <h1>관리자페이지</h1>
    <div>
    <Userpage />
    </div>
    <div>
    <Events />
    </div>
    <div>
    <Contents />
    </div>
      </Box>
  )
}

export default adminpage
