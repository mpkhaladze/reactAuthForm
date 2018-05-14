import React from 'react'
import { connect } from 'react-redux'
import { authActions } from './modules/Auth'
import { bindActionCreators } from 'redux'
import Router from './router'
import { history } from './store'
import { withRouter } from 'react-router-dom'
import Notifications from 'react-notification-system-redux'

class App extends React.Component {
  async componentWillMount () {
    const successAutoLogin = await this.props.autoLogin(this.props.token)
    if (successAutoLogin && this.props.history.location.pathname === '/login') {
      this.props.history.push('/dashboard')
    } else if (!successAutoLogin) {
      this.props.history.push('/login')
      this.forceUpdate()
    }
  }
  render () {
    return (
      <div className='App'>
        <Notifications
          notifications={this.props.notifications}
        />
       <Router history={history} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    logged: state.user.logged,
    loadingStatus: (!state.user.logged || state.user.logged === 'pending'),
    token: state.auth.access_token,
    notifications: state.notifications
  }
}

const mapDispatchToProps = dispatch => {
  const { autoLogin } = authActions
  return bindActionCreators({
    autoLogin
  }, dispatch)
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
