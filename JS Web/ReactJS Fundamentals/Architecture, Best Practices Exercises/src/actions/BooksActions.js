import dispatcher from '../dispatcher'

let booksActions = {
  createBook: (book) => {
    dispatcher.dispatch({
      type: 'CREATE_BOOK',
      book
    })
  },
  editBook: (id) => {
    dispatcher.dispatch({
      type: 'EDIT_BOOK',
      id
    })
  },
  deleteBook: (id) => {
    dispatcher.dispatch({
      type: 'DELETE_BOOK',
      id
    })
  }
}

export default booksActions
