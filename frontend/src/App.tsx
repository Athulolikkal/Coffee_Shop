import { Box } from "@mui/material"
import HomeScreen from "./screen/homeScreen/homeScree"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import SplashScreen from "./screen/splashScreen/splashScreen"
import Spinner from "./components/loader/spinner"

function App() {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ width: { xs: '100%', sm: '100%', md: '420px' } }}>
        <Router>
          <Routes>
            <Route path='/' element={<Spinner />} />
            <Route path='/coffee' element={<SplashScreen />} />
            <Route path='/shop' element={<HomeScreen />} />
          </Routes>
        </Router>
      </Box>
    </div>
  )
}

export default App
