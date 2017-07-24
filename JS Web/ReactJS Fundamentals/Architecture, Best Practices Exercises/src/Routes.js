import React from 'react'
import {Route, Switch} from 'react-router-dom'
import AuthorDetailsPage from './components/AuthorDetailsPage'
import AllAuthors from './components/AllAuthors'
import CreateBook from './components/CreateBook'
import EditBook from './components/EditBook'
import BookDetailsPage from './components/BookDetailsPage'
import AllBooks from './components/AllBooks'
import HomePage from './components/HomePage'

const Routes = () => (
  <Switch>
    <Route path='/books/all' component={AllBooks} />
    <Route path='/books/create' component={CreateBook} />
    <Route path='/books/edite/:id' component={EditBook} />
    <Route path='/books/:id' component={BookDetailsPage} />
    <Route path='/authors/all' component={AllAuthors} />
    <Route path='/authors/:id' component={AuthorDetailsPage} />
    <Route path='/' component={HomePage} />
  </Switch>
)

export default Routes
