import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import data from '../Data'

class AuthorsStore extends EventEmitter {
  constructor () {
    super()

    this.authors = data.authors
  }

  getAll () {
    return this.authors
  }

  getAuthorById (id) {
    id = Number(id)
    return this.authors.filter(a => a.id === id)[0]
  }

  getAuthorByBook (bookId) {
    bookId = Number(bookId)
    return this.authors.filter(a => a.books.indexOf(bookId) > -1)[0]
  }

  createAuthor (author) {
    author.id = this.authors.length
    this.authors.push(author)
  }

  deleteAuthor (id) {
    id = Number(id)
    let index = this.authors.findIndex(i => i.id === id)
    this.authors.splice(index, 1)
  }

  authorAddBookById (authorName, bookId) {
    bookId = Number(bookId)
    return this.authors.filter(a => a.name === authorName)[0].books.push(bookId)
  }

  handleAction (action) {
    switch (action.type) {
      case 'CREATE_AUTHOR': {
        this.createAuthor(action.author)
        break
      }
      case 'DELETE_AUTHOR': {
        this.deleteAuthor(action.id)
        break
      }
      default: break
    }
  }
}

let authorsStore = new AuthorsStore()
dispatcher.register(authorsStore.handleAction.bind(authorsStore))
export default authorsStore
