import React, {useState} from 'react'

function HookCounterTwo() {
     const intialcount = 0
     const[count, setCount] = useState(intialcount)
 
    
    const incrementFive =() => {
        for(let i=0; i<5; i++) {
            setCount(prevCount => prevCount +1)
        }
            
    }
 
 
     return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={() => setCount(intialcount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount +1)}>Increment</button>
        <button onClick={() => setCount(prevCount => prevCount -1)}>Decrement</button>
        <button onClick = {incrementFive}>Increment by 5</button>
    </div>
  )
}

export default HookCounterTwo