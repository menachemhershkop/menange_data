import React from 'react'
import '../css/Button.css'

function Button(props) {
  return (
    <div>
      <button onClick={()=>{props.change(!props.state);
      }}>{props.type}</button>
    </div>
  )
}

export default Button
