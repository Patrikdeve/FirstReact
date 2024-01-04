import React, {useState} from 'react'

function HookCounterThree() {
    const [name, setName] = useState({firstname: '', lastname: ''})
  return (
    <div>
        <form>
            <input type='text' name='firstname' value = {name.firstname}  
            onChange = { event => setName({...name, firstname: event.target.value })}
            ></input>
           
            <input type='text' name = 'lastname' value = {name.lastname}
            onChange = { event => setName({ ...name, lastname: event.target.value })}
            ></input>

            <h2>Your first name is - {name.firstname}</h2>
            <h2>Your Last name is - {name.lastname}</h2>
        </form>
    </div>
  )
}

export default HookCounterThree