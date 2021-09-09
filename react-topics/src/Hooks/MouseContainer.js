import React, { useState } from 'react'
import RunEffectsOnlyOnce from './RunEffectsOnlyOnce'

const MouseContainer = () => {
    const [display, setDisplay] = useState(true)
    return (
        <div>
        <button onClick={()=>setDisplay(!display)}>display toggel</button>
            {
                display && <RunEffectsOnlyOnce />
            }
        </div>
    )
}

export default MouseContainer
