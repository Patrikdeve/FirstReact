import React, { Component } from 'react'
import PostList from './Components/PostList'
import PostForm from './Components/PostForm'
import ClassCounter from './Components/ClassCounter'
import HookCounter from './Components/HookCounter'
import HookCounterTwo from './Components/HookCounterTwo'
import HookCounterThree from './Components/HookCounterThree'
import HookCounterFour from './Components/HookCounterFour'


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

        <HookCounterThree/>

        <HookCounterFour/>
      </div>
    )
  }
}

export default App
