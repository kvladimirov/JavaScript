import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class TodoStore extends EventEmitter {
  constructor () {
    super()

    this.todos = [
      { id: 0, title: 'Go shopping', completed: false },
      { id: 1, title: 'Go walking', completed: false }
    ]
  }

  createTodo (title) {
    let id = this.todos.length + 1
    this.todos.push({
      id,
      title,
      completed: false
    })

    this.emit('change') // This reports that data was already changed by emitting a change event. IT DOES NOT RETURN THE DATA OR SOMETHING ELSE
                        // Event will be registered by the subscribed - class, in the current case this is TodoList -
                        // TodoStore.on('change', () => {
                        // this.getAllTodos()
                        // })
  }

  deleteTodo (id) {
    // const todo = this.todos.find(todo => todo.id === id)
    console.log(id)
    delete this.todos.splice()
    console.log(this.todos)
    this.emit('change')
  }

  completeTodo (id) {
    const todo = this.todos.find(todo => todo.id === id)
    todo.completed = true
    this.emit('change')
  }

  getAll () {
    return new Promise((resolve, reject) => {
      resolve(this.todos.slice(0))
    })
  }

  handleAction (action) {
    switch (action.type) {
      case 'CREATE_TODO': {
        this.createTodo(action.title)
        break
      }
      case 'COMPLETE_TODO': {
        this.completeTodo(action.id)
        break
      }
      case 'DELETE_TODO': {
        this.deleteTodo(action.id)
        break
      }
      default: {
        throw new Error('Invalid action type')
      }
    }
  }
}

let todoStore = new TodoStore()

dispatcher.register(todoStore.handleAction.bind(todoStore))

export default todoStore
