import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Terrorist from './compunent/Terrorist'
import Button from './compunent/Button'
import SearchCount from './compunent/SearchCount'
import SearchName from './compunent/SearchName'
function App() {

  const [showList, setList] = useState(false);
  const [sherchCount, setCount] = useState(false);
  const [sherchName, setName] = useState(false);
  return (
    <>
    <Button type='Show' change={setList} state={showList}></Button>
    <div>{showList && <Terrorist></Terrorist>}</div>
    <Button type='Sherch by count' change={setCount} state={sherchCount}></Button>
    <div>{sherchCount && <SearchCount></SearchCount>}</div>
    <Button type='Sherch by name' change={setName} state={sherchName}></Button>
    <div>{sherchName&&<SearchName></SearchName>}</div>
    </>
  )
}

export default App
