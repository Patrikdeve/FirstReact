//use Reducer with the context
import React, {useReducer} from 'react'
import './App.css'
import ComponentA from './ReducerWithContext/ComponentA';
import ComponentB from './ReducerWithContext/ComponentB';
import ComponentC from './ReducerWithContext/ComponentC';
import DataFetchingOne from './FetchingDatawithEffects/DataFetchingOne';
import DataFetchingTwo from './FetchingDatawithEffects/DataFetchingTwo';



export const CountContext = React.createContext()
const intitalState = 0; 
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
function App() {
  const [count, dispatch] = useReducer(reducer, intitalState)
  return (
    /*Special thing is here that count value is being shared with the components
    <CountContext.Provider value = {{countState: count, countDispatch: dispatch}} >
        <div className='App'>
          <h2>Count - {count}</h2>
            <ComponentA/>
            <ComponentB/>
            <ComponentC/>
        </div>
    </CountContext.Provider>
    */
   <div className='App'>
      <DataFetchingOne/>

      <DataFetchingTwo/>
   </div>
  )
}


//Now Done with the  UseReducer without Context starting with the useReducer with context
// import React, { Component } from 'react'
// import PostList from './Components/PostList'
// import PostForm from './Components/PostForm'
// import ClassCounter from './Components/ClassCounter'
// import HookCounter from './Components/HookCounter'
// import HookCounterTwo from './Components/HookCounterTwo'
// import HookCounterThree from './Components/HookCounterThree'
// import HookCounterFour from './Components/HookCounterFour'
// import ClassCounterOne from './UseEffectComponents.js/ClassCounterOne'
// import HookCounterOne from './UseEffectComponents.js/HookCounterOne'
// import ClassMouse from './UseEffectComponents.js/ClassMouse'
// import './App.css'
// import HookMouse from './UseEffectComponents.js/HookMouse'
// import MouseContainer from './UseEffectComponents.js/MouseContainer'
// import IntervalClassCounter from './UseEffectComponents.js/IntervalClassCounter'
// import IntervalHookCounter from './UseEffectComponents.js/IntervalHookCounter'
// import DataFetching from './FetchingDatawithEffects/DataFetching'
// import ReducerCounter from './Reducer/ReducerCounter'
// import ReducerCounterTwo from './Reducer/ReducerCounterTwo'
// import ReducerCounterThree from './Reducer/ReducerCounterThree'

// export class App extends Component {
//   render() {
//     return (
//       <div className='App'>

//         {/* here done with the http
//         {/* <PostList/> 
//         <PostForm></PostForm> */}

//         {/* <ClassCounter/> 
//         <HookCounter/> */}

//         {/* <HookCounterTwo/> */}
// {/* 
//         <HookCounterThree/>

//         <HookCounterFour/> */}
//         {/* //Done with the useStates */}

//         {/* <ClassCounterOne/> */}
//         {/* <HookCounterOne/> */}

//         {/* <ClassMouse/> */}

//         {/* <HookMouse/> */}
//         {/* <MouseContainer/> */}

//         {/* <IntervalClassCounter/> */}

//         {/* <IntervalHookCounter/> */}
      

//         {/* <DataFetching/> */}

//           {/* <ReducerCounter/> */}
//           {/* <ReducerCounterTwo/> */}
//           <ReducerCounterThree/>

//       </div>
//     )
//   }
// }

export default App
