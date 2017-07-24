import dispatcher from '../dispatcher'

let authorsActions = {
  createAuthor: (author) => {
    dispatcher.dispatch({
      type: 'CREATE_AUTHOR',
      author
    })
  },
  deleteAuthor: (id) => {
    dispatcher.dispatch({
      type: 'DELETE_AUTHOR',
      id
    })
  }
}

export default authorsActions
