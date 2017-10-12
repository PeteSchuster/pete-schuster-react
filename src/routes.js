import React from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/pages/Home'
import Post from './containers/templates/Post'

export const Routes = () => (
  <div>
    <Route exact path='/' component={Home} />
    <Route path='/:year/:month/:slug' component={Post} />
  </div>
)

export default Routes
