import { useState } from 'react';
import { IconButton, Toolbar, } from '@mui/material'
import HomeIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


const Footer = () => {
  const [selected, setSelected] = useState<number>(0)
  const buttons = [HomeIcon, FavoriteBorderOutlinedIcon, BookmarkBorderOutlinedIcon, PersonOutlineOutlinedIcon,]
  return (
    <div style={{ width: '100%', padding: 0, margin: 0 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {buttons.map((Btn, index) => (
          <IconButton color="inherit" key={index} onClick={() => setSelected(index)}>
            <Btn sx={{ transition: 'all 0.3s ease',  color: selected === index ? 'white' : 'black', backgroundColor: selected === index ? '#003B40' : 'white', padding: selected === index ? '5px' : '', fontSize: selected === index ? '40px' : '20px', borderRadius: '27px' }} />
          </IconButton>
        ))}
      </Toolbar>
    </div>

  )
}

export default Footer