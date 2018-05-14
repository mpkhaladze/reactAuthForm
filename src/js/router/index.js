import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'

export default () => (


  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route exact path='/dashboard' component={Dashboard} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/logout' component={Login} />
  </Switch>
)
