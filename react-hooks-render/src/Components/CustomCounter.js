import React from 'react'
import useCounter from '../hooks/useCounter'

function CustomCounter() {
    const [ count, increment, decrement, reset] = useCounter(10)
  return (
    <div>
        <h2>Count - {count}</h2>
        <button onClick={increment}>Increment Count</button>
        <button onClick={decrement}>Decrement Count</button>
        <button onClick={reset}>Reset Count</button>
    </div>
  )
}

export default CustomCounter