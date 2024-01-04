import React, {useState} from 'react'

//create a counter using hook by using useState function 
function HookCounter() {
    const initialcount  = 0
    const [count, incrementCount] = useState(initialcount)
  return (
    <div>
        <button onClick={() => incrementCount(count+1)}>Clicked {count}</button>
    </div>
  )
}

export default HookCounter