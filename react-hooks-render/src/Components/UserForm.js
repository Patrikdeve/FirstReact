import React, {useState} from 'react'
import useInput from '../hooks/useInput'


function UserForm() {
    // const [firstname, setfirstname] = useState('')
    // const [lastname , setlastname] = useState('')
    
    const [ firstname, bindfirstname, resetfirstname] = useInput('')
    const [lastname, bindlastname, resetlastname] = useInput('')
    const submitHandler = (event) => {
        event.preventDefault()
        alert(`Hello ${firstname} ${lastname}`)
        resetfirstname()
        resetlastname()
    }
 
    return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>First Name</label>
                <input type = 'text' {...bindfirstname}  />
            </div>
            <div>
                <label>Last Name</label>
                <input type = 'text' {...bindlastname} />
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default UserForm