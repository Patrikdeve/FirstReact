import React from 'react'

//We can provide default value to the create Context 
//Used only when the component dosen't have the matching component above it's tree
const UserContext = React.createContext('Shreyash')


const UserProvider  = UserContext.Provider
const UserConsumer = UserContext.Consumer

//This context also can be passed using usercontext
export default UserContext
export {UserProvider, UserConsumer}