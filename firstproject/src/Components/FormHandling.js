import React, { Component } from 'react'

export class FormHandling extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '', 
         comments: '', 
         topic: 'React'
      }
    }

    usernameHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    commentsChangeHandler = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    topicChangeHandler = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    submitHandler = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <label>UserName</label>
            <input type = 'text' value = {this.state.username}  onChange={this.usernameHandler}></input>

         <div>
            <label>Comments</label>
            <textarea value = {this.state.comments} onChange= {this.commentsChangeHandler}></textarea>
        </div>

        <div>
            <label>Topics</label>
            <select value = {this.state.topic} onChange={this.topicChangeHandler}>
                <option value= 'React'>React</option>
                <option value= 'Angular'>Angular</option>
                <option value= 'Vue'>Vue</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
        </form>

      </div>
    )
  }
}

export default FormHandling
