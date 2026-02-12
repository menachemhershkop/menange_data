import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Terrorist from './compunent/Terrorist'
import Button from './compunent/Button'
import SearchCount from './compunent/SearchCount'
import SearchName from './compunent/SearchName'
import Filter from './compunent/Filter'
import Most from './compunent/Most'
function App() {

  const [showList, setList] = useState(false);
  const [sherchCount, setCount] = useState(false);
  const [sherchName, setName] = useState(false);
  const [filterStatus, setStatus] = useState(false);
  const [getMost, setMost] = useState(false);
 
  return (
    <>
    <h1>Wellcome do the mening Terrorist system</h1>
    <div className='buttons'>
    <Button type='Show all' change={setList} state={showList}></Button>
    <Button type='Sherch by count' change={setCount} state={sherchCount}></Button>
    <Button type='Sherch by name' change={setName} state={sherchName}></Button>
    <Button type='Filetr status' change={setStatus} state={filterStatus}></Button>
    <Button type='Most danger' change={setMost} state={getMost}></Button>
    </div>
    <div>{filterStatus&&<Filter></Filter>}</div>
    <div>{sherchName&&<SearchName></SearchName>}</div>
    <div>{sherchCount && <SearchCount></SearchCount>}</div>
    <div>{showList && <Terrorist></Terrorist>}</div>
    <div>{getMost&&<Most></Most>}</div>
    </>
  )
}

export default App
