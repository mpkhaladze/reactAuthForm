import React from 'react'
import { connect } from 'react-redux'
import DocumentTitle from 'react-document-title'
// import Layout from '../modules/Layout'

const Component = props => (
  <DocumentTitle title='Dashboard'>
{/*    <Layout>
      <h3>Welcome to dashboard</h3>
    </Layout>*/}
 <h3>Welcome to dashboard</h3>
  </DocumentTitle>
)

const mapStateToProps = state => ({
  email: state.user.email
})

export default connect(mapStateToProps)(Component)
