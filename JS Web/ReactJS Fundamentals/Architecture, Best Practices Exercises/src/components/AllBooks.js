import React from 'react'
import {Link} from 'react-router-dom'
import BooksStore from '../stores/BooksStore'
import AuthorsStore from '../stores/AuthorsStore'

export default class AllBooks extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      books: [],
      currentPage: 1,
      booksPerPage: 10
    }

    this.handleClick = this.handleClick.bind(this)
    this.onSortingChange = this.onSortingChange.bind(this)

    BooksStore.on('change', () => {
      this.getBooks()
    })
  }

  getBooks () {
    let authors = AuthorsStore.getAll()
    let books = BooksStore.getAll().filter(b => authors.some(a => a.books.includes(b.id)))
    books = books.sort((a, b) => a.date - b.date)
    for (let book of books) {
      book.authorName = AuthorsStore.getAuthorByBook(book.id).name
    }
    this.setState({
      books: books
    })
  }

  componentWillMount () {
    this.getBooks()
  }

  handleClick (event) {
    this.setState({
      currentPage: Number(event.target.id)
    })
  }

  onSortingChange (value) {
    if (value === 'date') {
      this.setState(prevState => ({
        books: prevState.books.sort((a, b) => a.date - b.date)
      }))
    }

    if (value === 'author') {
      this.setState(prevState => ({
        books: prevState.books.sort((a, b) => a.authorName.localeCompare(b.authorName))
      }))
    }

    if (value === 'title') {
      this.setState(prevState => ({
        books: prevState.books.sort((a, b) => a.title.localeCompare(b.title))
      }))
    }
  }

  render () {
    const { books, currentPage, booksPerPage } = this.state

    // Logic for displaying books
    const indexOfLastBook = currentPage * booksPerPage
    const indexOfFirstBook = indexOfLastBook - booksPerPage
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook)

    let renderBooks = currentBooks.map(b => {
      return (
        <div>
          <div className='book' key={b.id}>
            <Link to={`/books/${b.id}`}>
              <img src={b.image} alt='cover' />
              <h3>{b.title}</h3>
            </Link>
            <p>Author: <Link to={`/authors/${b.author}`}>{b.authorName}</Link></p>
            <br /><br />
          </div>
        </div>
      )
    })

    // Logic for displaying page numbers
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(books.length / booksPerPage); i++) {
      pageNumbers.push(i)
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <button
          key={number}
          id={number}
          onClick={e => this.handleClick(e)}>
          {number}
        </button>
      )
    })

    return (
      <div>
        <h1>All Books:</h1>
        <label>Select sorting: </label>
        <select onChange={e => this.onSortingChange(e.target.value)}>
          <option value='date'>byDate</option>
          <option value='author'>byAuthor</option>
          <option value='title'>byTitle</option>
        </select>
        <br /><br />
        {renderBooks}
        <ul id='page-numbers'>
          {renderPageNumbers}
        </ul>
      </div>
    )
  }
}
