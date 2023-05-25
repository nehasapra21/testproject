import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'

import { SignupAPI, LoginAPI } from '../API/LoginAPI'
import { responseGoogle, responseFacebook } from '../API/SocialLogin'

import LoginComponent from '../pages/LoginComponent'

import { login } from '../redux/loginLogout'
import { connect } from 'react-redux'

class Login extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      EmailAddress: '',
      Password: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitResponse = async (e) => {
    e.preventDefault()

    try {
      const response = await LoginAPI({
        ...this.state
      })
      this.props.loginUser(response)
      if (
        response.data.data.CategoryIds &&
        response.data.data.CategoryIds.length !== 0
      ) {
        this.props.history.push('/categories')
      } else {
        this.props.history.push('/welcome')
      }
    } catch {
      //err goes here
    }
  }

  callSocialFacebook = async (response) => {
    try {
      const data = await responseFacebook(response)

      if (typeof data.EmailAddress !== 'undefined') {
        try {
          const res = await SignupAPI({
            ...data
          })
          try {
            const response = await LoginAPI({
              EmailAddress: data.EmailAddress,
              Password: data.Password
            })
            this.props.loginUser(response)
            if (
              response.data.data.CategoryIds &&
              response.data.data.CategoryIds.length !== 0
            ) {
              this.props.history.push('/categories')
            } else {
              this.props.history.push('/welcome')
            }
          } catch {
            //err goes here
          }
        } catch (err) {
          toast.error('Unable to login with facebook.')
        }
      }
    } catch (err) {
      console.log('facebook', err)
    }
  }

  callSocialGoogle = async (response) => {
    debugger
    try {
      const data = await responseGoogle(response)

      try {
        const res = await SignupAPI({
          ...data
        })
        try {
          const response = await LoginAPI({
            EmailAddress: data.EmailAddress,
            Password: data.Password
          })
          this.props.loginUser(response)
          if (
            response.data.data.CategoryIds &&
            response.data.data.CategoryIds.length !== 0
          ) {
            this.props.history.push('/categories')
          } else {
            this.props.history.push('/welcome')
          }
        } catch (err) {
          debugger
          //err goes here
        }
      } catch (err) {}
    } catch (err) {
      toast.error('Unable to login with google.')
    }
  }

  render() {
    return (
      <LoginComponent
        data={this.state}
        handleChange={this.handleChange}
        submitResponse={this.submitResponse}
        responseGoogle={this.callSocialGoogle}
        responseFacebook={this.callSocialFacebook}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return { loggedStatus: state.loginLogout.isLoggedIn }
}

const mapDispatchToProps = (dispatch) => {
  return { loginUser: (response) => dispatch(login(response)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))
