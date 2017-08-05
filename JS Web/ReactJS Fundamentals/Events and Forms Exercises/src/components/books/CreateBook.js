import React from 'react'
import CreateBookForm from './CreateBookForm'
import FormHelpers from '../common/FormHelpers'
import BookActions from '../../actions/BooksActions'
import BookStore from '../../stores/BooksStore'
import AuthorStore from '../../stores/AuthorsStore'
import toastr from 'toastr'

class CreateBook extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      book: {
        title: 'Бурята на века',
        price: 15.90,
        author: '2',
        image: 'https://www.orangecenter.bg/media/catalog/product/cache/1/image/602f0fa2c1f0d1ba5e241f914e856ff9/9/7/9786191570690.jpg',
        description: `“Бурята на века” нагледно демонстрира и извежда на преден план една от най-силните страни на Кинг като разказвач – драматургичното му майсторство. Макар и да е писал истории като “Тъмната кула”, в които героите преброждат най-различни светове, талантът му блести най-силно в пресъздаването на човешките взаимоотношения в сравнително затворени общности, където Кралят подлага на безжалостна дисекция междуличностните отношения и добавя уникално социалнопсихологическо измерение към жанра на свръхестествения ужас.`
      },
      authors: [],
      error: ''
    }

    this.handleBookCreation = this.handleBookCreation.bind(this)
    BookStore.on('book_created', this.handleBookCreation)
  }

  componentDidMount () {
    let authors = AuthorStore.getAll()
    this.setState({
      authors: authors
    })
  }

  componentWillUnmount () {
    BookStore.removeListener('book_created', this.handleBookCreation)
  }

  handleBookChange (ev) {
    FormHelpers.handleFormChange.bind(this)(ev, 'book')
  }

  handleBookForm (ev) {
    ev.preventDefault()
    BookActions.create(this.state.book)
  }

  handleBookCreation (book) {
    toastr.success('Book added')
    this.props.history.push(`/books/${book.id}`)
  }

  render () {
    return (
      <div>
        <h1>Create book</h1>
        <CreateBookForm
          authors={this.state.authors}
          book={this.state.book}
          error={this.state.error}
          onChange={this.handleBookChange.bind(this)}
          onSave={this.handleBookForm.bind(this)} />
      </div>
    )
  }
}

export default CreateBook
