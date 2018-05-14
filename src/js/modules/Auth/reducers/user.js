import { USER_SUCCESS, USER_FAIL, LOG_OUT } from '../types'

export const initialState = {
  __type: null,
  id: null,
  email: null,
  slug: null,
  status: null,
  type: null,
  fb_id: null,
  google_id: null,
  streams_count: null,
  streams_limit: null,
  logged: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SUCCESS:
      return {
        ...action.payload,
        logged: true
      }
    case 'user/logged/pending':
      return {
        ...state,
        logged: 'pending'
      }
    case USER_FAIL:
      return initialState
    case LOG_OUT:
      return initialState
    default:
      return state
  }
}
