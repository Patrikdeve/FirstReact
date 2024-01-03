import React, { Component } from 'react'

 class Refs extends Component {
//Note Refs can't be attached to the functional compoenents
    constructor(props) {
      super(props)
        //First method to create the ref generally used 
        this.inputRef = React.createRef()

        //second method to create the call back ref
        this.cbRef = null
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }

    componentDidMount() {
        // this.inputRef.current.focus()
        if(this.cbRef) {
            this.cbRef.focus()
        }
    }
    
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <input type= 'text' ref = {this.inputRef}/>
        <input type= 'text' ref = {this.setCbRef}/>
        <button onClick={this.clickHandler} >Click</button>
      </div>
    )
  }
}

export default Refs
