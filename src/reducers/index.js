import { reducer as form } from 'redux-form'
import { reducer as notifications } from 'react-notification-system-redux'
import { authReducer } from '../modules/auth'

export default {
  ...authReducer,
  form,
  notifications
}
