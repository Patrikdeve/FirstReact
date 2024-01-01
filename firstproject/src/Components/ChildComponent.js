// import React from 'react'

// function ChildComponent(props) {
//   return (
//     <div>
//         <button onClick= {() => props.greetHandler('child')}>Greet Parent </button>
//     </div>
//   )
// }

// export default ChildComponent

import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick = {() => props.greetHandler('Omkar')}>
            Click Me !!
        </button>
    </div>
  )
}

export default ChildComponent