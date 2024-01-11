import React, { Component } from 'react'

 class ClassTimer extends Component {
    interval
    constructor(props) {
      super(props)
    
      this.state = {
         time: 0
      }
    }
    
    componentDidMount() {
       this.interval = setInterval(() => {
        this.setState( prevState => ({time: prevState.time +1}))
       }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
  render() {
    return (
      <div>
        Time - {this.state.time}
        <button onClick={() => clearInterval(this.interval)}> Clear Timer</button>
      </div>
    )
  }
}

export default ClassTimer
