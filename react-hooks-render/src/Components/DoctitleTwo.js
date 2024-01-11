import React, {useState} from 'react'
import useDoctitle from '../hooks/useDoctitle'
//used the custom hook here 
function DoctitleTwo() {
    const [ count, setCount] = useState(0)
   useDoctitle(count)
  return (
    <div>
        <button onClick={() => setCount(count+1)}> Count - {count} </button>
    </div>
  )
}

export default DoctitleTwo