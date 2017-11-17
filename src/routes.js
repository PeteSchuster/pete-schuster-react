import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './containers/pages/Home'
import Blog from './containers/pages/Blog'
import Contact from './containers/pages/Contact'
import Portfolio from './containers/pages/Portfolio'
import NoMatch from './containers/pages/NoMatch'

import PortfolioItem from './containers/templates/PortfolioItem'
import Post from './containers/templates/Post'

export const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/blog' component={Blog} />
    <Route exact path='/portfolio' component={Portfolio} />
    <Route exact path='/contact' component={Contact} />

    // old about page
    <Redirect from='/about' to='/' />

    <Route path='/portfolio/:slug' component={PortfolioItem} />
    <Route path='/:year/:month/:slug' component={Post} />
    <Route component={NoMatch}/>
  </Switch>
)

export default Routes
