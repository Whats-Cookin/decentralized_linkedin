import { useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loader from './loading/index'
import Snackbar from './snackBar/index'
import Login from './Login/index'
import './App.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Profile from './Profile/index'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [isSnackbarOpen, toggleSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')

  const commonProps = {
    toggleSnackbar,
    setSnackbarMessage,
    setLoading
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#009688'
      },
      secondary: {
        main: '#FFFFFF'
      }
    },
    
  })

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            position: 'relative',
            backgroundColor: '#eeeeee',
            minHeight: '100vh',
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: 'calc(3px + 2vmin)',
            color: 'rgb(37, 3, 3)',
            overflow: 'hidden',
            justifyContent: 'center'
          }}
        >
          <Snackbar snackbarMessage={snackbarMessage} isSnackbarOpen={isSnackbarOpen} toggleSnackbar={toggleSnackbar} />
          <Loader open={loading} />
          <Routes>
          
            <Route path='/' element={<Profile {...commonProps} />} />
            <Route path='login' element={<Login {...commonProps} />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </Router>
  )
}

export default App
