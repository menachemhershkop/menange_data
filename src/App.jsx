import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Terrorist from './compunent/Terrorist'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <Terrorist></Terrorist>
    </>
  )
}

export default App
