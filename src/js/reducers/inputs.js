import _ from 'lodash'

import {
  FETCH_INPUT_OPTIONS_REQUEST,
  FETCH_INPUT_OPTIONS_FAILURE,
  FETCH_INPUT_OPTIONS_SUCCESS
} from '../constants/actionTypes'

const initialState = {
}

const inputs = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INPUT_OPTIONS_REQUEST:
      return _.defaults({
        [action.payload.inputType]: {
          isFetching: true,
          isFetched: false,
          isFailed: false
        }
      }, state)
    case FETCH_INPUT_OPTIONS_FAILURE:
      return _.defaults({
        [action.payload.inputType]: {
          isFetching: false,
          isFetched: true,
          isFailed: true
        }
      }, state)
    case FETCH_INPUT_OPTIONS_SUCCESS:
      return _.defaults({
        [action.payload.inputType]: {
          isFetching: false,
          isFetched: true,
          isFailed: true,
          items: action.payload.items
        }
      }, state)
    default:
      return state
  }
}
export default inputs
