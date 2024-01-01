import React from 'react'
import Person from './Person'

function NameList() {
    const names  = ['Demon', 'Stephen', 'Ellijah']
    //without using key it will give error so we use index as our key inside the h2 tag
    const nameList = names.map((name, index) => <h2 key = {index}> {index} {name}</h2>)
    
    // const persons = [
    //     {
    //         id : 1,
    //         name: 'Stephen', 
    //         age: 120,
    //         kills : 200
    //     },
    //     {
    //         id : 2,
    //         name: 'Deamon', 
    //         age: 140,
    //         kills : 500
    //     },
    //     {
    //         id : 3,
    //         name: 'Ellijah', 
    //         age: 1200,
    //         kills : 3000
    //     }
    // ]
    // // return (
    // // <div>
    // //     {/* {
    // //         names.map(name =>  {
    // //         return <h2>{name}</h2>
    // //         })
    // //     } */}
        

    // // </div>

    // //Method 2
    // //Key prop is unique attribute that must not be same for the two entries
    // //It is specail prop it is reserved used to render the list  
    // const personList = persons.map(person => <Person key = {person.id} person = {person}></Person> )
    // return <div>{personList}</div>

    return <div>{nameList}</div>
  
}

export default NameList