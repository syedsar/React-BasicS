import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FectchingDataUsingUseEffect = () => {
    const[posts, setPosts] = useState({});
    const [id, setId] = useState()
    const [getPost, setGetPost] = useState(id)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${getPost}`)
        .then(res=>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[getPost])
    return (
        <div>
        <input type='text' value={id} onChange={(e)=>setId(e.target.value)} />
            <button onClick={()=>{setGetPost(id)}}>get post</button>
        <br/>
           {posts.title}
        </div>
    )
}

export default FectchingDataUsingUseEffect
