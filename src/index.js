import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store'

const App = () => {
  return <div>Hello world</div>
};

const render = Component => (
  ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    , root)
)

render(App)
