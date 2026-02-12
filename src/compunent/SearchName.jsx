import React, { useState } from 'react'
import list from '../db/data.json'

function SearchName() {
    const [name, setName] = useState('');
    const a = list.filter((terror)=> terror.name == name)
  console.log('123', name, a);
  return (
    <div>
       <label>
        Terrorist name:
        <input
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      {name !== '' &&
        <p>Terrorist name is {name}.</p>
      }
      <table>
                <tr>
                <th>name</th>
                <th>organization</th>
                <th>attacks Count</th>
                <th>status</th>
                <th>relation To Israel Summary</th>
                <th>image</th>
        </tr>
      {a.map((key, a)=>{
          if (key.imageUrl == null) {
              key.imageUrl = 'public/mostefa.png'
            }
            return (
                <tr key={a}>
                    <td>{key.name}</td>
                    <td>{key.organization}</td>
                    <td>{key.attacksCount}</td>
                    <td>{key.status}</td>
                    <td>{key.relationToIsraelSummary}</td>
            <td><img src={key.imageUrl}></img></td>
            </tr>
        
            )
      })}
      </table>
    </div>
  )
}

export default SearchName
