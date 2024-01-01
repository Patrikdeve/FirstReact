import React from 'react'
//Functional Components 
// function Greet() {
//     return <h1> Hello Sudhanshu!!</h1>
// }
//rewriting using ES6 arrow function syntax
// const Greet = () => <h1> Hello Omkar !!</h1>

// //here default make sures changing import name in app.js file still gives the same output
// //This allow us to import with any name
// export default Greet; 


//In below case 
//Props are immutable they are can't be changed
// export const Greet = (props) =>{
//     console.log(props); 
//     return (
//         <div>
//             <h1> Hello {props.name} you are hired by {props.company}!!!</h1>
//             {props.children}
//         </div>
//     )
// } 
//The above is named import requries same name in importing also need to write it as {Greet} while importing



//Now destructing the props in functional components
//1st Method
// export const Greet = ({name, company}) => {
//     return (
//         <h1>Hello Myself {name} and I work in {company}</h1>
//     )
// }

//2nd Method 
export const Greet = props => {
    const{name, company} = props
    return (
        <h1>Hello Myself {name} and I work in {company}</h1>
    )
}
