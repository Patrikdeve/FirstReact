import React, { Component } from 'react'
import UpdateComponent from './withCounter'

 class ClickCounter extends Component {
  
    render() {
    return (
      <div>
        <button onClick={this.props.incrementCount}> Click {this.props.count} times</button>
      </div>
    )
  }
}

export default UpdateComponent(ClickCounter, 5)
