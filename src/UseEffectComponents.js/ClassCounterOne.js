import React, { Component } from 'react'

export class ClassCounterOne extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0, 
         name: ''
      }
    }
    componentDidMount()  {
        document.title =  `Clicked ${this.state.count} times`
    }
    
    componentDidUpdate(prevProps, prevState) {
      if(prevState.count != this.state.count) {
        console.log('Updating Document Title')
        document.title =  `Clicked ${this.state.count} times`
        }
      }
          
  
    changeHandler =  (event) => {
      this.setState( {
        name: event.target.value
      })
    }
  
    render() {
    const {name} = this.state
    return (
      <div>
        <input type='text' value = {name} onChange={this.changeHandler}/>
        <button onClick={() => this.setState({
            count:this.state.count+1
        })}>Clicked {this.state.count} times</button>
      </div>
    )
  }
}

export default ClassCounterOne
