import React, {useState} from 'react'
import useDoctitle from '../hooks/useDoctitle'

function DoctitleOne() {
    const [ count, setCount] = useState(0)
useDoctitle(count)
  return (
    <div>
        <button onClick={() => setCount(count+1)}> Count - {count} </button>
    </div>
  )
}

export default DoctitleOne