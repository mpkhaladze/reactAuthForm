import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { authActions } from '../Auth'
import Login from './view/Login'
import { reduxForm } from 'redux-form'
const FORM_NAME = 'Login'

const Component = props => <Login {...props} />

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.form[FORM_NAME] && state.form[FORM_NAME].values,
    token: state.auth.access_token
  }
}

const mapDispatchToProps = {
  standardLogin: authActions.standardLogin
}

const FormComponent = reduxForm({
  form: FORM_NAME,
  enableReinitialize: true,
  destroyOnUnmount: false
})(Component)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FormComponent))
