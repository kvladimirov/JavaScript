import React from 'react'
import BooksStore from '../stores/BooksStore'
import BooksActions from '../actions/BooksActions'
import AuthorsStore from '../stores/AuthorsStore'
import CommentsStore from '../stores/CommentsStore'

export default class EditBook extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      book: {
        id: this.props.match.params.id
      },
      author: {},
      errors: {helpBlock: ''}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleValidationState = this.handleValidationState.bind(this)
  }

  componentWillMount () {
    this.getBook()
  }

  getBook () {
    let book = BooksStore.getBookById(this.state.book.id)
    let author = AuthorsStore.getAuthorByBook(this.state.book.id)
    let comments = CommentsStore.getCommentsByBook(this.state.book.id)

    this.setState({
      book: book,
      author: author,
      comments: comments
    })
  }

  handleValidationState () {
    let book = this.state.book
    let errors = {}
    let isValidForm = true
    console.log(book)
    if (!book.title || !book.description || !book.author || !book.price) {
      errors.helpBlock = 'Invalid data!'
      console.log(errors)
      isValidForm = false
    }
    this.setState = ({ errors })
    return isValidForm
  }

  handleSubmit (event) {
    event.preventDefault()
    let books = BooksStore.getAll()

    if (!this.handleValidationState()) {
      return
    }

    let book = this.state.book
    let id = books.length + 1
    book.id = id
    console.log(book)
    BooksActions.createBook(book)
    AuthorsStore.authorAddBookById(book.author, book.id)
    this.props.history.push('/books/all')
  }

  handleChange (event) {
    const target = event.target
    const name = target.name
    const value = target.value
    let book = this.state.book
    book[name] = value
    this.setState = (book)
  }

  render () {
    let authors = AuthorsStore.getAll()
    authors = authors.map(author => {
      return <option key={author.id} value={author.name}>{author.name}</option>
    })
    authors.unshift(<option key={0}>--- Избери автор ---</option>)

    return (
      <div className='form center-form'>
        <h1>Create Book Page</h1>
        <form>
          <span className='error'>{ this.state.errors.helpBlock }</span>
          <br />
          <div className='form-group'>
            <label htmlFor='image'>Image</label>
            <input type='text'
              name='image'
              onChange={this.handleChange}
              value={this.state.book.image} />
          </div>
          <br />
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input type='text'
              name='title'
              onChange={this.handleChange}
              value={this.state.book.title} required />
          </div>
          <br />
          <div className='form-group'>
            <label htmlFor='description'>Description</label>
            <textarea rows='5' cols='21'
              name='description'
              onChange={this.handleChange}
              value={this.state.book.description} required />
          </div>
          <br />
          <div className='form-group'>
            <label htmlFor='author'>Author</label>
            <select name='author' onChange={this.handleChange} value={this.state.book.value} required>
              {authors}
            </select>
          </div>
          <br />
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input type='number'
              name='price'
              onChange={this.handleChange}
              value={this.state.book.price} required />
          </div>
          <br />
          <div className='form-group'>
            <input className='btn form-btn' type='submit' value='Create' onClick={this.handleSubmit} />
          </div>
        </form>
      </div>
    )
  }
}
