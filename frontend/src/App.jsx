import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Routes, Route } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import NavigationBar from './components/NavigationBar'
import Home from './components/Home'
import Game from './pages/game'
import './App.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
})

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
