import { useEffect, useState } from 'react'
import './App.css'
import { Form } from './components/NewTodoForm';
import { Formlist } from './components/Todolist';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


function App() {
  // State for theme mode
  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode === null || storedMode === undefined) return false
    try {
      return JSON.parse(storedMode);
    } catch (error) {
      console.error("Failed to parse darkMode:", error);
      return false;
    }
  }
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode])


  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("ITEMS");

    if (storedTodos === null || storedTodos === undefined) return []
    try {
      return JSON.parse(storedTodos);
    } catch (error) {
      console.error("Failed to parse storedTodos:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos])

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos, {
          id: crypto.randomUUID(),
          title, completed: false
        },
      ]
    }) 
  }

  function setDense(id, completed) {
    setDense(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo;
      })
    })
  }


  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo;
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    })
  }

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
  
  // Define light and dark themes
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#dc004e',
      },
    },
  });
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#f48fb1',
      },
    },
  });
  
  // Toggle theme mode
  function toggleTheme() {
    setDarkMode((prevMode) => !prevMode);
  }

  //console.log(todos);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <>
        <div>
        <IconButton
          color="inherit"
          onClick={toggleTheme}
          style={{ marginBottom: '1rem', float: 'right' }}
          aria-label="Toggle light/dark mode"
        >
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        </div>
        
        <h1>Add To Do Item</h1>
        <Form addTodo={addTodo}/>
        
        <h2>To Do List:</h2>
        
        <Formlist todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} setDense={setDense} />
       
      </>
    </ThemeProvider>
  )
}

export default App