import React, { Component } from 'react'

 class UserGreeting extends Component {
 
 constructor(props) {
   super(props)
 
   this.state = {
      isLoggedIn: true
   }
 }
 
 
    render() {

       /* if(this.state.isLoggedIn) {
            return (
                <h1>Welcome Omkar</h1>
            )
        } else {
            return (
                <h2>Welcome Guest</h2>
            )
        }
    // return (
    //   <div>
    //      <h1>Welcome Omkar</h1>
    //      <h2>Welcome Guest</h2>
    //   </div>
    // )

    */
   //Method 2 
   /*let message 
   if(this.state.isLoggedIn) {
    message = <h1>Welcome Omkar</h1>
   } else {
    message = <h2>Welcome Guest</h2>
   }

   return <div>{message}</div>
   */

   //Method 3 ternary conditional operator 
   /*return (
    this.state.isLoggedIn ? 
    <h1>Welcome Omkar</h1> : 
    <h2>Welcome Guest</h2>
   )
   */

   //Method 4 using short ciruciting method if left side condition false nothing will rendered on screen

   return this.state.isLoggedIn && <h1>Welcome Omkar !!</h1>

  }
}

export default UserGreeting
