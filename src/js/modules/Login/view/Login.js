import React from 'react'
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
      <form className='u-posAbsoluteCenter Login' onSubmit={this.props.handleSubmit(this.formSubmit)}>
        <div className='ui raised card fluid'>
          <div className='content'>
            <div className='ui form'>
              <div className='field'>
                <label>Username</label>
                <div className='ui icon input'>
                  <Field
                    type='text'
                    name='username'
                    component='input'
                    placeholder='Username'
                  />
                  <i className='user icon' />
                </div>
              </div>
              <div className='field'>
                <label>Password</label>
                <div className='ui icon input'>
                  <Field
                    type='password'
                    name='password'
                    component='input'
                    placeholder='Password'
                  />
                  <i className='lock icon' />
                </div>
              </div>
              <button className='ui blue submit button' type='submit'>Login</button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default Login
