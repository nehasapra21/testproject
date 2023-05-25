/* eslint-disable no-undef */
import React from 'react'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { clientId, appId } from '../constants'
import FacebookLogin from 'react-facebook-login'

import { facebookIcon, googleIcon } from '../assets/svg'
import { Button } from 'react-bootstrap'
import { useEffect } from 'react'
import { googleLogin } from '../API/LoginAPI'
import { login } from '../redux/loginLogout'

const SocialLoginComponent = (props) => {
  const { responseFacebook, responseGoogle } = props

  const dispatch = useDispatch()

  const history = useHistory()

  const handleGoogleResponse = (res) => {
    loginGoogle(res?.credential)
  }

  useEffect(() => {
    window?.google?.accounts?.id.initialize({
      client_id: clientId,
      callback: handleGoogleResponse
    })

    window?.google?.accounts?.id.renderButton(
      document.getElementById('google-login_btn'),
      { theme: 'outline', size: 'large', className: 'google-btn' }
    )
  }, [window?.google])

  const loginGoogle = async (token) => {
    try {
      const res = await googleLogin({
        loginType: 1,
        google_oauth_token: token
      })

      const time = new Date(new Date().getTime() + 1000 * 60 * 120)
      toast.success('You have been LoggedIn Successfully')
      Cookies.set('fakeNewsUserStatus', true, { expires: time })
      Cookies.set('fakeNewsUserToken', res.data.data.Token, {
        expires: time
      })
      Cookies.set('fakeNewsUserDetail', JSON.stringify(res.data.data), {
        expires: time
      })
      dispatch(login(res))
      if (
        res?.data?.data?.CategoryIds &&
        res?.data?.data?.CategoryIds.length !== 0
      ) {
        setTimeout(() => {
          history.push('/categories')
        }, 1000)
      } else {
        setTimeout(() => {
          history.push('/welcome')
        }, 1000)
      }
    } catch (error) {
      toast.error('Unable to login with google.')
    }
  }

  return (
    <div className='social-logins'>
      <FacebookLogin
        appId={appId}
        fields='name,email,picture'
        callback={responseFacebook}
        className='facebook-btn'
        icon={facebookIcon}
        render={(renderProps) => (
          <Button className='social-btns google' onClick={renderProps.onClick}>
            {facebookIcon}
          </Button>
        )}
      />
      <div id='google-login_btn'>{googleIcon}</div>
    </div>
  )
}

export default SocialLoginComponent
