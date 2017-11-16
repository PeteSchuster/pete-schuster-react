import React from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/pages/Home'
import Blog from './containers/pages/Blog'
import About from './containers/pages/About'
import Contact from './containers/pages/Contact'
import Portfolio from './containers/pages/Portfolio'
import Post from './containers/templates/Post'

export const Routes = () => (
  <div>
    <Route exact path='/' component={Home} />
    <Route exact path='/blog' component={Blog} />
    <Route exact path='/about' component={About} />
    <Route exact path='/portfolio' component={Portfolio} />
    <Route exact path='/contact' component={Contact} />
    <Route path='/:year/:month/:slug' component={Post} />
  </div>
)

export default Routes
