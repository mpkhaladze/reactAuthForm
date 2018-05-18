import React from 'react'
import DocumentTitle from 'react-document-title'
import { Field } from 'redux-form'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.formSubmit = this.formSubmit.bind(this)
  }
  async formSubmit () {
    const successLogin = await this.props.standardLogin(this.props.username, this.props.password)
    if (successLogin) {
      this.props.history.push('/dashboard')
    }
  }
  render () {
    return (
        <DocumentTitle title='login'>
        <div>
          <form onSubmit={this.props.handleSubmit(this.formSubmit)}>
            <div>
              <div>
                <label>Username</label>
                <div>
                  <Field
                    type='text'
                    name='username'
                    component='input'
                    placeholder='Username'
                  />
                  <i className='user icon' />
                </div>
              </div>
              <div>
                <label>Password</label>
                <div>
                  <Field
                    type='password'
                    name='password'
                    component='input'
                    placeholder='Password'
                  />
                  <i className='lock icon' />
                </div>
              </div>
              <button type='submit'>Login</button>
            </div>
          </form>
        </div>
        </DocumentTitle>
    )
  }
}

export default Login
