import React from 'react'
import {Route, Switch} from 'react-router-dom'
import AuthorDetails from './components/AuthorDetails'
import AllAuthors from './components/AllAuthors'
import BookDetails from './components/BookDetails'
import AllBooks from './components/AllBooks'
import Home from './components/Home'

const Routes = () => (
  <Switch>
    <Route path='/books/all' component={AllBooks} />
    <Route path='/books/:id' component={BookDetails} />
    <Route path='/authors/all' component={AllAuthors} />
    <Route path='/authors/:id' component={AuthorDetails} />
    <Route path='/' component={Home} />
  </Switch>
)

export default Routes
