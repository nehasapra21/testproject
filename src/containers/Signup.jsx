import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'

import { SignupAPI, LoginAPI } from '../API/LoginAPI'
import { responseGoogle, responseFacebook } from '../API/SocialLogin'
import SignUpComponent from '../pages/SignUpComponent'

import { login } from '../redux/loginLogout'
import { connect } from 'react-redux'
class Signup extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      Name: '',
      EmailAddress: '',
      Password: '',
      ConfirmPassword: '',
      LoginType: 0
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  //Google Login

  submitResponse = async (event) => {
    event.preventDefault()
    if (this.state.Password === this.state.ConfirmPassword) {
      try {
        const res = await SignupAPI({
          ...this.state
        })
        if (res) {
          try {
            const res = await LoginAPI({
              EmailAddress: this.state.EmailAddress,
              Password: this.state.Password
            })
            if (res) {
              this.props.loginUser(res)
              if (
                res.data.data.CategoryIds &&
                res.data.data.CategoryIds.length !== 0
              ) {
                this.props.history.push('/categories')
              } else {
                this.props.history.push('/welcome')
              }
            }
          } catch (err) {
            ///err will goes here
          }
        }
      } catch (err) {}
    }
  }

  callSocialFacebook = async (response) => {
    try {
      const data = await responseFacebook(response)

      if (typeof data.EmailAddress !== 'undefined') {
        try {
          await SignupAPI({ ...data })
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
        } catch {
          //err goes here
        }
      }
    } catch (err) {
      console.log('facebook', err)
    }
  }

  callSocialGoogle = async (response) => {
    try {
      const data = await responseGoogle(response)

      try {
        await SignupAPI({ ...data })
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
      } catch {}
    } catch (err) {
      console.log('google', err)
    }
  }

  render() {
    return (
      <SignUpComponent
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signup))
