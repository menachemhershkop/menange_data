import React from 'react'

function Button(props) {
  return (
    <div>
      <button onClick={()=>{props.change(!props.state); console.log(props.state);
      }}>{props.type}</button>
    </div>
  )
}

export default Button
