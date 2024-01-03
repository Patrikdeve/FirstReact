import React, { Component } from 'react'
import { UserConsumer } from './userContext'

//Here By using UserContext we directly passed the props without passing to it the intermediate components
export class ComponentF extends Component {
  render() {
    return (
      <div>

            <UserConsumer>
                {
                    (username) => {
                        return <h1>Hello {username}</h1>
                    }
                }
            </UserConsumer>
      </div>
    )
  }
}

export default ComponentF
