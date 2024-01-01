import React from 'react'

function Person({person}) {
  return (
    <div>
        <h2> Myself {person.name} and I am {person.age} yrs old and I killed over {person.kills} peoples</h2>
    </div>
  )
}

export default Person