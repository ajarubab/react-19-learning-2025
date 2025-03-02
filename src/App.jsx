import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './user'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Count Value : {count}</h1>
      <button onClick={()=>setCount(count+1)}> + </button>
      <User/>
    </>
  )
}

export default App
