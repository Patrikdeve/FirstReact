import React from 'react'
import './Mystyles.css'

function Stylesheet(props) {
    //This also can be done using prps here 
    let className  = props.primary ? 'primary':''
  return (
    <div className= {`${className} font-xl`}>
        <h2>StyleSheet</h2>
    </div>
  )
}

export default Stylesheet