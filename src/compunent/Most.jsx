import React from 'react'
import list from '../db/data.json'

 function Most() {
    const danger = list.filter((terror)=> terror.status =='active')
    let most = {attacksCount:0}
    for (let i=0; i<danger.length;i++){
        if( danger[i].attacksCount > most.attacksCount && danger[i].imageUrl != null){
            most = danger[i]
        }
    }
   
    
    
  return (
    <div>
        <table>
                <tr>
                <th>name</th>
                <th>organization</th>
                <th>attacks Count</th>
                <th>status</th>
                <th>relation To Israel Summary</th>
                <th>image</th>
        </tr>
   
                <tr >
                    <td>{most.name}</td>
                    <td>{most.organization}</td>
                    <td>{most.attacksCount}</td>
                    <td>{most.status}</td>
                    <td>{most.relationToIsraelSummary}</td>
            <td><img src={most.imageUrl}></img></td>
            </tr>
        
      </table>
      
    </div>
  )
}
export default Most