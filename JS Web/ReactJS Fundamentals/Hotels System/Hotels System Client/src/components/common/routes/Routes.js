import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from '../routes/PrivateRoute'
import RegisterPage from '../../users/RegisterPage'
import LoginPage from '../../users/LoginPage'
import LogoutPage from '../../users/LogoutPage'
import ListHotelsPage from '../../hotels/ListHotelsPage'
import CreateHotelPage from '../../hotels/CreateHotelPage'
import HotelDetailsPage from '../../hotels/HotelDetailsPage'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={ListHotelsPage} />
    <Route path='/users/register' component={RegisterPage} />
    <Route path='/users/login' component={LoginPage} />
    <PrivateRoute path='/users/logout' component={LogoutPage} />
    <PrivateRoute path='/hotels/create' component={CreateHotelPage} />
    <PrivateRoute path='/hotels/details/:id' component={HotelDetailsPage} />
  </Switch>
)

export default Routes
