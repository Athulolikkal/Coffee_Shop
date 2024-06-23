import { Box } from "@mui/material"
// import SpalshScreen from "./screen/splashScreen/splashScreen"
import HomeScreen from "./screen/homeScreen/homeScree"

function App() {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ width: { xs: '100%', sm: '100%', md: '420px' } }}>
        {/* <SpalshScreen /> */}
        <HomeScreen />
      </Box>
    </div>
  )
}

export default App
