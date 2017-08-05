import React from 'react'
import CreateAuthorForm from './CreateAuthorForm'
import FormHelpers from '../common/FormHelpers'
import AuthorActions from '../../actions/AuthorsActions'
import AuthorStore from '../../stores/AuthorsStore'
import toastr from 'toastr'

class CreateAuthor extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      author: {
        name: 'Тери Пратчет',
        image: 'http://orangecenter.bg/blog/wp-content/uploads/2017/07/220px-10.12.12TerryPratchettByLuigiNovi1.jpg'
      },
      error: ''
    }
    this.handleAuthorCreation = this.handleAuthorCreation.bind(this)
    AuthorStore.on('author_created', this.handleAuthorCreation)
  }

  componentWillUnmount () {
    AuthorStore.removeListener('author_created', this.handleAuthorCreation)
  }

  handleAuthorChange (ev) {
    FormHelpers.handleFormChange.bind(this)(ev, 'author')
  }

  handleAuthorForm (ev) {
    ev.preventDefault()
    AuthorActions.create(this.state.author)
  }

  handleAuthorCreation (author) {
    toastr.success('Author created')
    this.props.history.push(`/authors/${author.id}`)
  }

  render () {
    return (
      <div>
        <h1>Create author</h1>
        <CreateAuthorForm
          author={this.state.author}
          error={this.state.error}
          onChange={this.handleAuthorChange.bind(this)}
          onSave={this.handleAuthorForm.bind(this)} />
      </div>
    )
  }
}

export default CreateAuthor
