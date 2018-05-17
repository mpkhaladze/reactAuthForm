import Notifications from 'react-notification-system-redux'
import Api from '../../../api'
import { push } from 'react-router-redux'
import { createAction } from 'redux-actions'

import {
  AUTH_SUCCESS,
  AUTH_FAIL,
  USER_SUCCESS,
  USER_FAIL,
  LOG_OUT
} from '../types'

const authSuccessAction = createAction(AUTH_SUCCESS)
const authFailAction = createAction(AUTH_FAIL)
const userSuccessAction = createAction(USER_SUCCESS)
const userFailAction = createAction(USER_FAIL)
const logOutAction = createAction(LOG_OUT)

const notificationOpts = message => ({
  message,
  position: 'br'
})

export const standardLogin = (username, password) => async dispatch => {
  dispatch({
    type: 'user/logged/pending'
  })
  let token = null

  try {
    token = await Api.fetchToken({
      username,
      password,
      grant_type: 'password',
      client_id: '1',
      client_secret: 'r15aA9nkeOyqNyzwSasaeau8h8uhJajyajA957YI'
    })
    dispatch(authSuccessAction(token))
    dispatch(Notifications.success(notificationOpts('token fetched')))
  } catch (err) {
    dispatch(authFailAction())
    dispatch(userFailAction())
    dispatch(Notifications.error(notificationOpts(err.message)))
  }

  if (!token) return false

  return userInfo(token.access_token)(dispatch)
}

export const userInfo = token => async dispatch => {
  try {
    const user = await Api.fetchUser(token)
    dispatch(Notifications.success(notificationOpts('user data fetched')))
    dispatch(userSuccessAction(user))
    return user
  } catch (err) {
    dispatch(userFailAction())
  }
}

export const autoLogin = token => async dispatch => {
  if (!token) {
    return false
  } else {
    dispatch({
      type: 'user/logged/pending'
    })
  }
  const user = await userInfo(token)(dispatch)
  if (!user) {
    dispatch(authFailAction())
  }
  return user
}

export const logOut = () => async (dispatch, getState) => {
  const state = getState()
  if (state.user && state.user.logged) {
    dispatch(logOutAction())
    dispatch(push('/login'))
  } else {
    return false
  }
}
