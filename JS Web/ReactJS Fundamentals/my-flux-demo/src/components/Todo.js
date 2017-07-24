import React, { Component } from 'react'
import TodoActions from '../actions/TodoActions'

class Todo extends Component {
  completeTodo (event) {
    event.preventDefault()
    TodoActions.completeTodo(this.props.id)
  }

  deleteTodo (event) {
    event.preventDefault()
    TodoActions.deleteTodo(this.props.id)
  }
  render () {
    return (
      <li>
        {this.props.title} - {this.props.completed ? 'DONE' : (
          <button onClick={this.completeTodo.bind(this)}>PENDING</button>
        )} - <button onClick={this.deleteTodo.bind(this)}>Delete</button>
      </li>
    )
  }
}

// const Todo = (props) => (
//   <li>
//     {props.title} - {props.completed ? 'DONE' : 'PENDING'}
//   </li>
// )

export default Todo
