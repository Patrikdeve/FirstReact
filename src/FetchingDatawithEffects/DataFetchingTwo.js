import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const intitalState = {
    loading: true, 
    error:'', 
    post: {}
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'Fetch_success':
            return {
                loading: false, 
                error : '', 
                post : action.payload
            }
         
        case 'Fetch_error':
            return {
                loading:false, 
                error: `Something Went Wrong`,
                post: {}
            }
        
        default: 
            return state

    }
}
function DataFetchingTwo() {
   const [state, dispatch] =  useReducer(reducer, intitalState)
  
   useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
    .then(response => {
        dispatch({type:'Fetch_success', payload: response.data})
    })
    .catch(error => {
        dispatch({type:'Fetch_error'})
    })
}, [])
   return (
    <div>
        {state.loading ? 'Loading': state.post.title}
        {state.error ? state.error:null}
    </div>
  )
}

export default DataFetchingTwo