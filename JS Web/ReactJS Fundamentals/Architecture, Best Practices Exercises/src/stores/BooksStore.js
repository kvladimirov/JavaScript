import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import data from '../Data'

class BooksStore extends EventEmitter {
  constructor () {
    super()

    this.books = data.books
  }

  getAll () {
    return this.books
  }

  getBookById (bookId) {
    bookId = Number(bookId)
    return this.books.filter(b => b.id === bookId)[0]
  }

  getBooksByAuthor (authorId) {
    authorId = Number(authorId)
    return this.books.filter(b => b.author === authorId)
  }

  createBook (book) {
    // let id = this.books.length + 1
    // book[id] = id
    this.books.push(book)
    this.emit('change')
  }

  editBook (id, book) {
    id = Number(id)
    this.deleteBook(id)
    this.books.push(book)

    this.emit('change')
  }

  deleteBook (id) {
    id = Number(id)
    let index = this.books.findIndex(i => i.id === id)
    this.books.splice(index, 1)

    this.emit('change')
  }

  handleAction (action) {
    console.log(action)
    switch (action.type) {
      case 'CREATE_BOOK': {
        this.createBook(action.book)
        break
      }
      case 'EDIT_BOOK': {
        this.editBook(action.id, action.book)
        break
      }
      case 'DELETE_BOOK': {
        this.deleteBook(action.id)
        break
      }
      default: break
    }
  }
}

let booksStore = new BooksStore()
dispatcher.register(booksStore.handleAction.bind(booksStore))
export default booksStore
