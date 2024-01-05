import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)
  const tick = () => {
    setCount(prevCount => prevCount+1)
   }
   
    useEffect(() => {
       const interval = setInterval(tick, 1000)
       return () => {
        clearInterval(interval)
       }
    }, [])
    //if we are using count variable then to work useEffect properly need to add the 
    //count dependecy if we use prevCount then we need not include any dependency here
 
    return (
    <div>
        <h2>{count}</h2>
    </div>
  )
}

export default IntervalHookCounter