import React, { Component } from 'react'
import UpdateComponent from './withCounter'

export class HoverCounter extends Component {
   
    render() {
        const {name, count, incrementCount} = this.props
    return (
      <div>
         <h2 onMouseOver={incrementCount}> {name} Hovered {count} times</h2>
      </div>
    )
  }
}

export default UpdateComponent(HoverCounter, 10)
