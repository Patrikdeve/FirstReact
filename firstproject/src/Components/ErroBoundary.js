import React, { Component } from 'react'

//this is usefule to catch the error and send fallback UI
 class ErroBoundary extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }
    //first method using static getDerivedStateFromError
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    //method 2
    componentDidCatch(error, info) {
        console.log(error); 
        console.log(info); 
    }
 
    render() {
        if(this.state.hasError) {
            return <h1>Something Went wrong!!</h1>
        }
        return this.props.children
  }
}

export default ErroBoundary
