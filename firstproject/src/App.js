//Now Starting with the context Here only 
import './App.css';
import React, { Component } from 'react';
import ComponentC from './ContextComponents/ComponentC';
import { UserProvider } from './ContextComponents/userContext';
 








//The context topic will become very easy using the useContext hook 
//Syntax is very simple just go through the code evolution topic 60 to get to know this easy hook

class App extends Component {
  render() {
    return (
      <div className = 'App'>
        
         {/* <UserProvider value = "Omkar">
             <ComponentC />
         </UserProvider> */}

         
      </div>
    )
  }
}

export default App





























// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from 'react'
// import FragmentDemo from './Components/FragmentDemo';
// import Table from './Components/Table';
// import PureCompo from './Components/PureComponent';
// import ParentComp from './Components/ParentComp';
// import Refs from './Components/Refs';
// import FocusInput from './Components/FocusInput';
// import FRParentInput from './Components/FRParentInput';
// import PortalDemo from './Components/PortalDemo';
// import Hero from './Components/Hero';
// import ErroBoundary from './Components/ErroBoundary';
// import ClickCounter from './Components/ClickCounter';
// import HoverCounter from './Components/HoverCounter';
// import RenderWithCounter from './Components/RenderWithCounter';
// import ClickCounterTwo from './Components/ClickCounterTwo';
// import HoverCounterTwo from './Components/HoverCounterTwo';



//  class App extends Component {
//   render() {
//     return (
//       <div className='App'>
//           {/* <FragmentDemo/> */}
//           {/* <Table /> */}

//           {/* <ParentComp/> */}
      
//           {/* <Refs></Refs> */}

//           {/* <FocusInput/> */}

//           {/* <FRParentInput></FRParentInput> */}

//         {/* <PortalDemo/> */}
      
//       {/* wrapping up to all childrens to single error hypes the one who also don't have any error so we wrap it to individual child
//         <ErroBoundary>
//         <Hero heroName = "Batman"/>
//         <Hero heroName = "Superman"/>
//         <Hero heroName = "Joker"/>
//         </ErroBoundary> */}
        
//         {/* <ErroBoundary>
//           <Hero heroName = "Batman"/>
//         </ErroBoundary>
//         <ErroBoundary>
//          <Hero heroName = "Superman"/>
//         </ErroBoundary>
//         <ErroBoundary>
//           <Hero heroName = "Joker"/>
//         </ErroBoundary> */}
        
//         {/* ************  Higher Order Component *********
//         <ClickCounter></ClickCounter>
//         --------In below case by just passing props this doesn't adds to the original component rather it adds to the wrapped component for this purpose we use the spread operator in 
//         update component function 
//         <HoverCounter name= 'Omkar'></HoverCounter>  */}
      

//       {/* **************** Now Going throug same scenario but using render prop method  */}

//       <RenderWithCounter render = { (count, incrementCount) => 
//       <ClickCounterTwo count = {count} incrementCount = {incrementCount} />}
//       />

//       <RenderWithCounter render = {(count, incremenetCount) => 
//       <HoverCounterTwo count = {count} incrementCount = {incremenetCount} />}
//       />
      
      
      
//       </div>
//     )
//   }
// }

// export default App






// starting advanced topics here above basics are done
// import logo from './logo.svg';
// import './App.css';
// import { Greet } from './Components/Greet';
// import Welcome from './Components/Welcome';
// import Hello from './Components/Hello';
// import Msg from './Components/Msg';
// import Counter from './Components/Counter';
// import FunctionClick from './Components/FunctionClick';
// import ClassClick from './Components/ClassClick';
// import EventBind from './Components/EventBind';
// import ParentComponent from './Components/ParentComponent';
// import UserGreeting from './Components/UserGreeting';
// import NameList from './Components/NameList';
// import Stylesheet from './Components/Stylesheet';
// import Inline from './Components/Inline';
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import Form from './Components/FormHandling';
// import LifeCycelA from './Components/LifeCycelA';




// function App() {
//   return (
//     <div className="App">

//       {/* <Counter>

//       </Counter> */}


//         {/* <Msg>
//           <button> Subscribe Here!!</button>
//         </Msg> */}

//         {/* Destructing Props in Functional Components*/}
//         {/* <Greet name = "Omkar"  company= "Morgan Stanely"></Greet> */}
//         {/* <Greet name = "Omkar" company= "Morgan Stanely">
//             <p> I am the VJTI Student!!</p>
//         </Greet>
//         <Greet name = "Shudhanshu" company = "JPMorgan">
//           <button> Click Me </button>
//         </Greet>
//         <Greet name = "Shreyash" company = "Morgan Stanely"></Greet>
//         <Welcome name = "Bruce" hero = "Batman"></Welcome>
//         <Welcome name = "Tony" hero ="IronMan"></Welcome>
//         <Welcome name = "Clark" hero = "SuperMan" ></Welcome> */}
//       {/* <Hello></Hello> */}
//       {/* Desturcting props in Class Components */}
//       {/* <Welcome name = "Bruce" hero = "Batman"></Welcome> */}
    

//       {/* <FunctionClick></FunctionClick>
//       <ClassClick></ClassClick> */}

//         {/* <EventBind></EventBind> */}


//       {/* <ParentComponent></ParentComponent> */}

//       {/* <UserGreeting></UserGreeting> */}

//       {/* <NameList></NameList> */}
    
//     {/* StyleSheet Method
//     <Stylesheet primary= {true}></Stylesheet> */}
    
//     {/* Inline Styling method
//     <Inline></Inline> */}

//     {/* <h2 className='error'>Error</h2>
//     <h1 className={styles.success}>Success</h1> */}

//     {/* <Form></Form> */}

//    <LifeCycelA />

//     </div>
//   );
// }

