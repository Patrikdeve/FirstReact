import React, {useState, useEffect, Component} from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
     
    const logMousePosition = (event) => {
        console.log('Mouse Event Called')
        setX(event.clientX)
        setY(event.clientY)
    }
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)
        
        //Below written the cleanup code in case we unmounted the container to 
        //remove the eventlistner here
        return () => {
            console.log('Component unmounting Code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, []) //here eacth time useEffect called after the render this can avoided by using the 
    //empty arrary to the useEffect as second parameter states useEffect doesn't depend on anything 
  
    return (
    <div>
        Hooks X - {x} Y - {y}
    </div>
  )
}

export default HookMouse