import { Box } from "@mui/material"
import SpalshScreen from "./screen/splashScreen/splashScreen"

function App() {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ width: { sm: '100%', md: '420px' } }}>
        <SpalshScreen />
      </Box>
    </div>
  )
}

export default App
