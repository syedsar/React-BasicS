import React, { useEffect, useState } from 'react'

const UseEffectAfterRender = () => {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        document.title=`you clicked ${count} times`
        console.log('useEffect runs')
    })
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>click</button>
        </div>
    )
}

export default UseEffectAfterRender
