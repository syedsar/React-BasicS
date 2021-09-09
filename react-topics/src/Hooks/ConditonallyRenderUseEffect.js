import React, { useEffect, useState } from 'react'

const ConditonallyRenderUseEffect = () => {
    
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(()=>{
        console.log('useEffect runs')
        document.title = `you have clicked ${count} times`
    },[count])
    return (
        <div>
            <input type='text' value={name} onChange={(e)=>(setName(e.target.value))} />
            <button onClick={()=>{setCount(count+1)}}>click</button>
        </div>
    )
}

export default ConditonallyRenderUseEffect
