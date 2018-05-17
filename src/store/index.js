import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import Reducers from '../reducers'
import { loadState, saveState } from '../helpers/localStorage'
import createHistory from 'history/createBrowserHistory'
import {
    routerMiddleware,
    routerReducer,
    syncHistoryWithStore
} from 'react-router-redux'
import thunk from 'redux-thunk'

const browserHistory = createHistory()
const router = routerMiddleware(browserHistory)

const persistedState = loadState()
const store = createStore(
  combineReducers({
    ...Reducers,
    routing: routerReducer
  }),
  persistedState,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(), router)
  )
)
export const history = syncHistoryWithStore(browserHistory, store)
store.subscribe(() => {
  saveState({
    auth: store.getState().auth
  })
})

export default store
