import React, { Component } from 'react'
import RegComp from './RegComp'
import PureCompo from './PureComponent'
import MemoComp from './MemoComp'

 class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'Omkar'
      }
    }
    
componentDidMount() {
    setInterval(()=>{
        this.setState({
            name: 'Omkar'
        })
    }, 2000)
}
  render() {
    console.log("Parent component render")
    return (
      <div>
        Parent Component
        <MemoComp name = {this.state.name}></MemoComp>
        {/* <RegComp name = {this.state.name}></RegComp>
        <PureCompo name = {this.state.name}></PureCompo> */}
      </div>
    )
  }
}

export default ParentComp
