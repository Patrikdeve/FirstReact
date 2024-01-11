import React from 'react'

function Title() {
    console.log('Rendering The Title Component')
  return (
    <div>
        Use Callback Hook
    </div>
  )
}

export default React.memo(Title)