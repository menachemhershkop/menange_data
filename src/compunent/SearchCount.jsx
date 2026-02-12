import React, { useState } from 'react'
import list from '../db/data.json'

function SearchCount() {
    const [name, setName] = useState('');
  const [attacks, setAttack] = useState('20');
  const ageAsNumber = Number(attacks);
  const a = list.filter((terror)=> terror.attacksCount == attacks)
  console.log('123', attacks, a);
  
  return (

    <div>
       
      <label>
        <br></br>
        Attack:
        <input
          value={attacks}
          onChange={e => setAttack(e.target.value)}
          type="number"
        />
       
      </label>
      
      {ageAsNumber > 0 &&
        <p>Attack number {ageAsNumber}.</p>
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

export default SearchCount
