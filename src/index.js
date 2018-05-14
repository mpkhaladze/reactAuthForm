import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import App from './js/App'
import store from './js/store'
import { BrowserRouter } from 'react-router-dom'


const root = document.createElement('div')
document.body.appendChild(root)

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
ReactDOM.render(<Index />, document.getElementById("root"));
