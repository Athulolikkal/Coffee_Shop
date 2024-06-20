import { Avatar, Box, Container, Typography } from '@mui/material'
import React from 'react'

const AvatarComponet = () => {
  return (
    <Container sx={{ margin: 0, padding: 0 }}>
      <Box sx={{ display: 'flex', justifyContent: 'end', paddingTop: '50px', paddingRight: '20px' }}>
        <Avatar alt="userImg" sx={{ width: 60, height: 60 }} src="https://as1.ftcdn.net/v2/jpg/04/66/47/56/1000_F_466475672_vMHZN7YSAxbDU9xxygsBOZ2S57zDAUv7.jpg" />
      </Box>
      <Box>
        <Typography sx={{ fontSize: '30px', lineHeight: 1, fontFamily: 'Raleway', fontWeight: 600 }}>Find a coffee shope anywhere</Typography>
      </Box>
    </Container>
  )
}

export default AvatarComponet