import React, {useState, useEffect, useCallback} from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function ParentCompo() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(
        () => {
            setAge(age+1)
        },
      [age])
    
    const incrementSalary = useCallback(() => {
        setSalary(salary + 5000)
    }, [salary])
  return (
    <div>
        {/* Observe Console can see rerendering of the each component even not operated or used 
        To remove this we wrap each component with React.memo at the time of export
        
        After using memo still can see the incrment Salary and incrment Age buttons are rednere so requires there useCallback hook
        */}
        <Title></Title>
        <Count text = 'Age' count = {age}></Count>
        <Button handleClick = {incrementAge}>Increment Age</Button>
        <Count text = 'Salary' count = {salary}/>
        <Button handleClick = {incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentCompo