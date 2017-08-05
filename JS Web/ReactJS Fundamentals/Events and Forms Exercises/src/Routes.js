import React from 'react'
import {Route, Switch} from 'react-router-dom'
import AuthorDetails from './components/authors/AuthorDetails'
import AllAuthors from './components/authors/AllAuthors'
import BookDetails from './components/books/BookDetails'
import AllBooks from './components/books/AllBooks'
import Home from './components/Home'
import PrivateRoute from './components/common/PrivateRoute'
import LogoutPage from './components/users/LogoutPage'
import RegisterPage from './components/users/RegisterPage'
import LoginPage from './components/users/LoginPage'
import CreateAuthor from './components/authors/CreateAuthor'
import CreateBook from './components/books/CreateBook'
import EditAuthor from './components/authors/EditAuthor'
import EditBook from './components/books/EditBook'
import EditComment from './components/books/EditComment'

const Routes = () => (
  <Switch>
    <Route path='/books/all' component={AllBooks} />
    <PrivateRoute path='/books/add' component={CreateBook} />
    <PrivateRoute path='/books/edit/:id' component={EditBook} />
    <Route path='/books/:id' component={BookDetails} />
    <PrivateRoute path='/authors/add' component={CreateAuthor} />
    <Route path='/authors/all' component={AllAuthors} />
    <PrivateRoute path='/authors/add' component={CreateAuthor} />
    <PrivateRoute path='/authors/edit/:id' component={EditAuthor} />
    <Route path='/authors/:id' component={AuthorDetails} />
    <PrivateRoute path='/comments/edit/:id' component={EditComment} />
    <Route path='/' exact component={Home} />
    <Route path='/users/register' component={RegisterPage} />
    <Route path='/users/login' component={LoginPage} />
    <PrivateRoute path='/users/logout' component={LogoutPage} />
  </Switch>
)

export default Routes
