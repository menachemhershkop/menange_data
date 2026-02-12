import React, { useState } from 'react'
import list from '../db/data.json'

function Filter() {
    const [status , setStatus] = useState()
    const a = list.filter((terror)=> terror.status == status)
    
  return (
    <div>
        <form action="">
       <p>
        Terrorist Status: <br />
        <label><input type="radio" name="status" value="active" onChange={e =>setStatus(e.target.value)}/> Active</label><br />
        <label><input type="radio" name="status" value="quiet" onChange={e =>setStatus(e.target.value)} /> Quiet</label><br />
        <label><input type="radio" name="status" value="dead" onChange={e =>setStatus(e.target.value)}/> Dead</label><br />
          <label><input type="radio" name="status" value="agent" onChange={e =>setStatus(e.target.value)}/> Israeli Agent</label><br />

      </p>
      </form>
      <hr />
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

export default Filter
