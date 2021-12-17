import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'

import AuthedUserView from './AuthedUserView'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser } = this.props
    return (
      <div className='app'>

           
          {authedUser === null ? (
            <Login /> // Thats the view if the user is not logged in
          ) :       
      
          (  
            <AuthedUserView /> // Thats the view if the user is logged in 

          )}
        </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)