import React from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/pages/Home'

export const Routes = () => (
  <div>
    <Route exact path='/' component={Home} />
  </div>
)

export default Routes
