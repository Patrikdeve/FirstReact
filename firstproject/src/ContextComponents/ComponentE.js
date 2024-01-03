import React, { Component } from 'react'
import ComponentF from './ComponentF'

import UserContext from './userContext'

//Using user context is simpler than the provider and consumer approach but there are the limitations
//1st Usercontext Only used in class component only 
//2nd This are subscribed to single context
export class ComponentE extends Component {
  render() {
    return (
      <div>
        <h3>Component E context is {this.context}</h3>
        <ComponentF />
      </div>
    )
  }
}

ComponentE.contextType = UserContext
export default ComponentE
