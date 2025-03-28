import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
 import Button from '@mui/material/Button';
 import { ThemeProvider, createTheme } from '@mui/material/styles';


 const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [count, setCount] = useState(() => {
    // Check if the count is saved in localStorage
    const saveCount = localStorage.getItem('count');
    // if true, parse it and return it, as a base10 number
    // if false, return 0
    return saveCount ? parseInt(saveCount, 10) : 0;
  })

  useEffect(() => {
    // Sets the count in localStorage
    localStorage.setItem('count', count);
  }, [count]);

  return (
    <ThemeProvider theme={theme}>
      <>
        
        <h1>To Do List</h1>
        <div className="card">
          <Button color="primary" variant="contained" onClick={() => setCount((count) => count + 1)} aria-label="Increment">
              +
          </Button>

          <div>count is {count}</div>

          <Button color="secondary" variant="contained" onClick={() => setCount((count) => count - 1)} aria-label="Decrement">
              -
          </Button>
        </div>
      </>
    </ThemeProvider>
  )
}

export default App
