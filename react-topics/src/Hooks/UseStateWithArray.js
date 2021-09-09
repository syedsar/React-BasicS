import React from 'react'

const UseStateWithArray = () => {
    const [items, setItems] = useState([])

    const addItem = ()=>{
        setItems([...items,{
            id:items.length,
            value : Math.floor(Math.random()*10)+1
        }])
    }
    return (
        <div>
            <button onClick={addItem}></button>
            {items.map(item=> <li key={item.id}>{item}</li>)}
        </div>
    )
}

export default UseStateWithArray
