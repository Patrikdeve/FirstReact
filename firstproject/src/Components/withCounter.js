import React from 'react'

//Concept of High Order Component
const UpdateComponent = (OriginalComponent, incrementNumber) => {
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
          
          incrementCount=() => {
            this.setState(prevState => {
               return  {count :prevState.count+incrementNumber}
            })
          }
        render() {
            return <OriginalComponent 
            count = {this.state.count} 
            incrementCount = {this.incrementCount}
            {...this.props}//Here spread function used to pass the remaining props
            />
        }
    }
    return NewComponent
}

export default UpdateComponent