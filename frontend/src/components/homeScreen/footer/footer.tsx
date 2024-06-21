import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';

const Footer = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: '53rem', bottom: 0 ,height:'114px'}}>
    <Toolbar>
      <IconButton color="inherit" aria-label="open drawer">
        <MenuIcon />
      </IconButton>
  
      <Box sx={{ flexGrow: 1 }} />
      <IconButton color="inherit">
        <SearchIcon />
      </IconButton>
      <IconButton color="inherit">
        <MoreIcon />
      </IconButton>
    </Toolbar>
  </AppBar>

    
  )
}

export default Footer