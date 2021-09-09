import React, { useEffect, useState } from 'react'

const RunEffectsOnlyOnce = () => {
    const [x,setX] = useState(0);
    const [y,setY] = useState(0)

    const setCord = (e)=>{
        console.log('Mouse Event')
        setX(e.clientX);
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('useEffect Runs')
        window.addEventListener('mousemove',setCord)

        return ()=>{
            window.removeEventListener('mousemove',setCord)
        }
    },[])
    return (
        <div>
            {x}:{y}
        </div>
    )
}

export default RunEffectsOnlyOnce
