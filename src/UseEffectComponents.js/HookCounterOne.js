import React, {useState, useEffect} from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)
    //useEffect runs after every render
    const [name, setName] = useState('')
    useEffect(() => {
        console.log('Updated The Document Title')
        document.title = `Clicked ${count} times`
    }, [count]) //the second pareameter to useEffect ensures only call function when count changes
    
    return (
    <div>
        <input type='text' value = {name} onChange = {(e) => setName(e.target.value)} />
        <button onClick={() => setCount(count+1)}>Clicked {count} times</button>
    </div>
  )
}

export default HookCounterOne