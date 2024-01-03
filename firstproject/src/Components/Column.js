import React from 'react'

function Column() {
  return (
    //if we use empty fragment we can't pass key attribute here 
    //so when we need to pass the key attribute you must use React.fragment here
    <>
        <td>Name</td>
        <td>Omkar</td>
    </>
  )
}

export default Column