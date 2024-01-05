import React, {useState, useEffect} from 'react'
import axios from 'axios'


function DataFetching() {
    //Now as rendereing the empty object instead of object array
    const[post, setPost] = useState({})
    const[id, setId] = useState(1)
    const [idfromButtonClick, setIdFromButtonClick] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idfromButtonClick}`)
        .then(response => {
            console.log(response)
            setPost(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [idfromButtonClick])
    const handleClick = () => {
        setIdFromButtonClick(id)
    }
  return (
    <div>
        <input type = 'text' value = {id} onChange={(event) => setId(event.target.value)} />
        <button type = 'button' onClick = {handleClick} >Fetch Post</button>
        <ul>
            {
                // posts.map(post => <li key = {post.id}>{post.title}</li>)
                <li key = {post.id}>{post.title}</li>
            }
        </ul>
    </div>
  )
}

export default DataFetching