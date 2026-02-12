import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Terrorist from './compunent/Terrorist'
import Button from './compunent/Button'
import Search from './compunent/Search'
function App() {

  const [showList, setList] = useState(false);
  const [sherchCount, setCount] = useState(false)
  return (
    <>
    <Button type='Show' change={setList} state={showList}></Button>
    <div>{showList && <Terrorist></Terrorist>}</div>
    <Button type='Sherch by count' change={setCount} state={sherchCount}></Button>
    <div>{sherchCount && <Search></Search>}</div>
    </>
  )
}

export default App
