import React, { Component } from 'react'

 class LifeCycelB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Sarang'
      }
      console.log('LifeCycelB constructor is Called')
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycle B getDerivedStatesfromProps');
        return null;
    }


    componentDidMount() {
        console.log('LifeCycle B componentDidMount');
    }
    shouldComponentUpdate() {
        console.log('LifeCycle B shouldComponentUpdate'); 
        return true; 
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleB getSnapshotbeforeupdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleB compnenetDidUpdate')
    }

   render() {
    console.log('LifeCycle B render method called')
    return (
      <div>
            LifeCycel B Check for the console
      </div>
    )
    
  }
}


export default LifeCycelB