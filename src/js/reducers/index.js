import { reducer as form } from 'redux-form'
import { reducer as notifications } from 'react-notification-system-redux'
import inputs from './inputs'
import { authReducer } from '../modules/Auth'

export default {
  ...authReducer,
  form,
  notifications,
  inputs
}
