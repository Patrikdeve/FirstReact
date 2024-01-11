import React , {useState, useEffect, useRef}from 'react'

function HookTimer() {
    const [time, setTime] = useState(0)
    const interValRef = useRef()
    useEffect(() => {
       interValRef.current = setInterval(() => {
            setTime(prevTime => prevTime + 1)
        }, 1000)
       
        return () => {
            clearInterval(interValRef.current)
        }
    }, [])
  return (
    <div>
        Hook Timer - {time}
        <button onClick={() => clearInterval(interValRef.current)}>Clear Hook Timer</button>
    </div>
  )
}

export default HookTimer