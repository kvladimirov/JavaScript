import React from 'react'
import {Link} from 'react-router-dom'
import AuthorsStore from '../../stores/AuthorsStore'

export default class AllAuthors extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      authors: [],
      currentPage: 1,
      authorsPerPage: 10
    }

    this.handleClick = this.handleClick.bind(this)
    this.onSortingChange = this.onSortingChange.bind(this)

    AuthorsStore.on('change', () => {
      this.getAuthors()
    })
  }

  getAuthors () {
    let authors = AuthorsStore.getAll()
    authors = authors.sort((a, b) => a.name.localeCompare(b.name))

    this.setState({
      authors: authors
    })
  }

  componentWillMount () {
    this.getAuthors()
  }

  handleClick (event) {
    this.setState({
      currentPage: Number(event.target.id)
    })
  }

  onSortingChange (value) {
    if (value === 'ascending') {
      this.setState(prevState => ({
        authors: prevState.authors.sort((a, b) => a.name.localeCompare(b.name))
      }))
    }

    if (value === 'descending') {
      this.setState(prevState => ({
        authors: prevState.authors.sort((a, b) => b.name.localeCompare(a.name))
      }))
    }
  }

  render () {
    const { authors, currentPage, authorsPerPage } = this.state

    // Logic for displaying books
    const indexOfLastAuthor = currentPage * authorsPerPage
    const indexOfFirstAuthor = indexOfLastAuthor - authorsPerPage
    const currentAuthors = authors.slice(indexOfFirstAuthor, indexOfLastAuthor)

    let renderAuthors = currentAuthors.map((author, index) => {
      return (
        <Link to={`/authors/${author.id}`} key={index}>
          <div className='author'>
            <img src={author.image} alt='author' />
            <h3>{author.name}</h3>
          </div>
        </Link>
      )
    })

    // Logic for displaying page numbers
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(authors.length / authorsPerPage); i++) {
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
      <div className='authors'>
        <label>Select sorting: </label>
        <select onChange={e => this.onSortingChange(e.target.value)}>
          <option value='ascending'>Ascending</option>
          <option value='descending'>Descending</option>
        </select>
        <br /><br />
        {renderAuthors}
        <ul id='page-numbers'>
          {renderPageNumbers}
        </ul>
      </div>
    )
  }
}
