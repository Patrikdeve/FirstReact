import React, { Component } from 'react'
import LifeCycelB from './LifeCycleB'

 class LifeCycelA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Sarang'
      }
      console.log('LifeCycelA constructor is Called')
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycle A getDerivedStatesfromProps');
        return null;
    }


    componentDidMount() {
        console.log('LifeCycle A componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('LifeCycle A shouldComponentUpdate'); 
        return true; 
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotbeforeupdate'); 
        return null; 
    }

    componentDidUpdate() {
        console.log('LifeCycleA compnenetDidUpdate')
    }

    changeState = () => {
        this.setState({
            name:'Siddharth'
        })
    }
  render() {
    console.log('LifeCycle A render method called')
    return (
        <div>
            LifeCyelA
           <div> <button onClick={this.changeState}>Change State</button></div>
            <LifeCycelB/>
        </div>
    )
    
  }
}

export default LifeCycelA
