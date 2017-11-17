import * as ActionTypes from '../actions'
import posts from './posts'
import portfolio from './portfolio'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  posts,
  portfolio
})

export default rootReducer
