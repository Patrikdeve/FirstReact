import React from 'react'

function MemoComp({name}) {
    console.log('Rednering Memo Component')
  return (
    <div>MemoComp</div>
  )
}

// export default MemoComp // This is not the pure form i.e, no comparison between the previous and current state here 

export default React.memo( MemoComp) //This is pure form function component