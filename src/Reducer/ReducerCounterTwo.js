import React, {useReducer} from 'react'

//This method suitable for the global vairables
let intitalState = {
    firstCounter : 0, //here can multiple tow more objects
    secondCounter: 10
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value}
        
        case 'decrement':
            return {...state,firstCounter: state.firstCounter - action.value}
        case 'decrement2':
            return {...state,secondCounter: state.secondCounter - action.value}
        
        case 'reset': 
            return intitalState; 
        
        default:
            return state
    }
}
function ReducerCounterTwo() {
    const [count, dispatch] = useReducer(reducer, intitalState)
  return (
    <div>
        <h2>Counter 1 - {count.firstCounter} || Counter 2 - {count.secondCounter}</h2>
        <button onClick = {() => dispatch({type: 'increment',  value: 1})}>Increment</button>
        <button onClick = {() => dispatch({type: 'increment2',  value: 5})}>Increment5</button>
        <button onClick = {() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
        <button onClick = {() => dispatch({type: 'decrement2', value: 5})}>Decrement5</button>
        <button onClick = {() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default ReducerCounterTwo