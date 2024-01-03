import React, { Component } from 'react'
import RegComp from './RegComp'

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
    return (
      <div>
        Parent Component
        <RegComp name = {this.state.name}></RegComp>
      
      </div>
    )
  }
}

export default ParentComp
