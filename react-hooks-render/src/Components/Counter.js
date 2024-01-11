import React, {useState, useMemo} from 'react'

function Counter() {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const incrementOne = () => {
        setCountOne(countOne+1);
    }
    const incrementTwo = () => {
        setCountTwo(countTwo + 1)
    }
    
    //useMemo used for performance optimization
   const isEven =  useMemo(() => {
        let i = 0
        while(i<200000000) i++
        return countOne%2 == 0
    }, [countOne])
    // const isEven = () => {
    //     //But say for the very high computing it takes a lot's of time
    //     let i = 0
    //     while(i<200000000) i++ //This loop nothing to jus tincrease the computation time
    //     //So we can see lag here so we use UseMemo Function
    //     return countOne%2 == 0
    // }
  return (
    <div>
        <div>
        <button onClick= {incrementOne}>Count one - {countOne}</button>
        <span> {
            isEven ? <h1>It is Even</h1> : <h1>It is Odd</h1>
            }
        </span>
        </div>
        <div>
        <button onClick={incrementTwo}>Count Two - {countTwo}</button>
        </div>
    </div>
  )
}

export default Counter