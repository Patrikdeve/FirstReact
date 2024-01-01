import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
incrementCount ()  {

    // this.state.count += 1
    // console.log(this.state.count); 
    //The above method is not rerendering the increment or the change done in the count 
    //so above method must be avoided 
    /*this.setState ({
        count : this.state.count +1
    })
    console.log(this.state.count); */
    //If we observe console we can see that each time increment is done the console logs one value less than it
    //<---------- Menas Call for setState is asynchronous

    //To avoid this we get callback function withing the set state as below 

    // this.setState ({
    //     count: this.state.count +1, 
    // }, () => {
    //     console.log('CallBack Value', this.state.count)
    // })
    // console.log(this.state.count); 

    //Whenever it needs to update the state form the previous state 
    //So now when you call incrementFive you can see increment by five
    this.setState((prevState) => ({
        count: prevState.count +1
    }), () => {
        console.log(this.state.count)
    })
    // console.log(this.state.count); 
}

incrementFive() {
    this.incrementCount()
    this.incrementCount()
    this.incrementCount()
    this.incrementCount()
    this.incrementCount()
    //This method not incremented count by %
    //REASON:  React groups up the multiple setState call to single update for better perfromance
}
  render() {
    return (
      <div>
         <h1> Count = {this.state.count}</h1>
         <button onClick={
            () => this.incrementFive()
         }> INCREMENT </button>
      
      </div>
    )
  }
}

export default Counter
