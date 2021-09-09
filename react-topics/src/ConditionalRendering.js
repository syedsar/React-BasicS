import React, { useState } from 'react'

const ConditionalRendering = ()=>{
  const [login, setLogin] = useState(true)
  
  //condtional rendering by storing JSX into javaScript variable
  // let msg
  // if(login){
  //   msg = 'Welcome Syed'
  // }else{
  //   msg = 'Welcome Guest'
  // }
  // return(
  //   <div>
  //     {msg}
  //   </div>
  // )


  //condtional rendering using if else statement
  // if(login){
  //   return <div>Welcome Syed</div>
  // }else{
  //   return <div>Welcome Guest</div>
  // }


  //conditional rendering using condtional operator
  // return(
  //   <div>
  //     {
  //       login ? <div>Welcome Syed</div> : <div>Welcome Guest</div>
  //     }
  //   </div>
  // )

  //conditional rendering using condtion &&
  return(
    login && <div>Welcome Syed</div>
  )
}

export default ConditionalRendering