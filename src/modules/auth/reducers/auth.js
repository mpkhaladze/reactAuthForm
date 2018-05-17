import { AUTH_SUCCESS, AUTH_FAIL, LOG_OUT } from '../types'

export const initialState = {
  access_token: null,
  expires_in: null,
  refresh_token: null,
  token_type: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...action.payload
      }
    case AUTH_FAIL:
      return initialState
    case LOG_OUT:
      return initialState
    default:
      return state
  }
}
