
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';
import PureCompo from './Components/PureComponent';




 class App extends Component {
  render() {
    return (
      <div className='App'>
          {/* <FragmentDemo/> */}
          {/* <Table /> */}

          <PureCompo/>
      </div>
    )
  }
}

export default App





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

