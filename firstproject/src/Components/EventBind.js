import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
      
      //For approach 4 where we used the arrow function to define the click handler function need not to defint the command using bind keyword
    //   this.clickHandler = this.clickHandler.bind(this)
    }
  
//using function method 
// clickHandler() {
//     this.setState ({
//         message : 'GoodBye !!!'
//     })
// }
 clickHandler = () => {
    this.setState({
        message: 'GoodBye !!'
    })
    console.log(this); 
}
    render() {
    return (
      <div>
            <h1>{this.state.message}</h1>
            {/* First method */}
            {/* <button onClick={this.clickHandler.bind(this)}> Click </button> */}
            {/* Second method  */}
            {/* <button onClick={() => this.clickHandler()}> Click </button> */}
     
            {/* Third method : Most frequently used approach made a change in the constructor only */}
            <button onClick={this.clickHandler}> Click </button>

     
      </div>
    )
  }
}

export default EventBind
