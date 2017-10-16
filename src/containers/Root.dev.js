import React from 'react'
import { Provider } from 'react-redux'
import App from './App'
// import DevTools from './DevTools'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>
)

export default Root
