//class Component
import React, {Component} from "react";

// class Welcome extends Component {
//     render() {
//         return <h1> I am {this.props.name} a.k.a {this.props.hero}</h1>
//     }
// }

//Now destructing the props here 
class Welcome extends Component {
    render () {
        const {name, hero} = this.props
        return <h1> I am {name} a.k.a {hero}</h1>
    }
}
export default Welcome