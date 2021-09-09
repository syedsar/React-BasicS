import React, { useState } from 'react'

const Parent = ()=>{

  // const [name, setName] = useState('');


  const greet = (value)=>{
    alert(`Hello ${value}, Welcome to this page`)
  }
  return(
    <>
      <Child greet={greet}/>
    </>
  )
}

const Child = ({greet})=>{

  const [value, setValue] = useState('')
  return(

    <>
      <input type='text' value={value}
       onChange={(e)=>setValue(e.target.value)} />
      <button onClick={()=>{greet(value)}}>Greeting</button>
    </>
  )
}

export default Parent;

 