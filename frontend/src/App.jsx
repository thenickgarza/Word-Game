import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Routes, Route } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import NavigationBar from './components/NavigationBar'
import Home from './components/Home'
import Game from './pages/game'
import Settings from './pages/settings'
import './App.css'
import { WordProvider } from './contexts/WordContext'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
})

function App() {
  return (
    <WordProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </ThemeProvider>
    </WordProvider>
  )
}

export default App
