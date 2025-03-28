import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

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
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>To Do List</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>

        <div>count is {count}</div>

        <button onClick={() => setCount((count) => count - 1)}>
          -
        </button>
      </div>

    </>
  )
}

export default App
