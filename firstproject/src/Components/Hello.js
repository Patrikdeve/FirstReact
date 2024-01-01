import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h2>
    //             Hello Buddy functional component using JSX version
    //         </h2>
    //     </div>
    // )

    return React.createElement('div',
    {id: 'hello', className: 'dummyClass'} 
    
    , null, React.createElement('h1', null, "Hello Buddies used HTML here!!")); 
}

export default Hello; 