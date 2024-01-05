import React, { Component } from 'react'
import PostList from './Components/PostList'
import PostForm from './Components/PostForm'
import ClassCounter from './Components/ClassCounter'
import HookCounter from './Components/HookCounter'
import HookCounterTwo from './Components/HookCounterTwo'
import HookCounterThree from './Components/HookCounterThree'
import HookCounterFour from './Components/HookCounterFour'
import ClassCounterOne from './UseEffectComponents.js/ClassCounterOne'
import HookCounterOne from './UseEffectComponents.js/HookCounterOne'
import ClassMouse from './UseEffectComponents.js/ClassMouse'
import './App.css'
import HookMouse from './UseEffectComponents.js/HookMouse'
import MouseContainer from './UseEffectComponents.js/MouseContainer'
import IntervalClassCounter from './UseEffectComponents.js/IntervalClassCounter'
import IntervalHookCounter from './UseEffectComponents.js/IntervalHookCounter'
import DataFetching from './FetchingDatawithEffects/DataFetching'

export class App extends Component {
  render() {
    return (
      <div className='App'>

        {/* here done with the http
        {/* <PostList/> 
        <PostForm></PostForm> */}

        {/* <ClassCounter/> 
        <HookCounter/> */}

        {/* <HookCounterTwo/> */}
{/* 
        <HookCounterThree/>

        <HookCounterFour/> */}
        {/* //Done with the useStates */}

        {/* <ClassCounterOne/> */}
        {/* <HookCounterOne/> */}

        {/* <ClassMouse/> */}

        {/* <HookMouse/> */}
        {/* <MouseContainer/> */}

        {/* <IntervalClassCounter/> */}

        {/* <IntervalHookCounter/> */}
      

        <DataFetching/>
      </div>
    )
  }
}

export default App
