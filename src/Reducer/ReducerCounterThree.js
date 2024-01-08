import React , {useReducer} from 'react'

let intitalState = 0; 
const reducer = (state, action) => {
    switch (action) {
        case 'increment': 
            return state+1
    
        case 'decrement':
            return state-1
        
        case 'reset':
            return intitalState
        
        default:
            return state
    }
}
function ReducerCounterThree() {
    const [count, dispatch] = useReducer(reducer, intitalState)
    const [countTwo, dispatchTwo] = useReducer(reducer, intitalState)
  return (
    <div>
        both working independently
        <h2>Count - {count}</h2>
        <button onClick  = { () => dispatch('increment')}>Increment</button>
        <button onClick = {() => dispatch('decrement')}>Decrement</button>
        <button onClick = {() => dispatch('reset')}>Reset</button>
        
        <h2>CountTwo - {countTwo}</h2>
        <button onClick  = { () => dispatchTwo('increment')}>Increment</button>
        <button onClick = {() => dispatchTwo('decrement')}>Decrement</button>
        <button onClick = {() => dispatchTwo('reset')}>Reset</button>
    
    
    </div>
  )
}

export default ReducerCounterThree