import React from 'react'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'

import helperAPI from './index'

const LoginAPI = async (body) => {
  try {
    const res = await helperAPI.postRequest('/api/User/LoginUser', { ...body })
    const time = new Date(new Date().getTime() + 1000 * 60 * 120)
    toast.success('You have been LoggedIn Successfully')
    Cookies.set('fakeNewsUserStatus', true, { expires: time })
    Cookies.set('fakeNewsUserToken', res.data.data.Token, {
      expires: time
    })
    Cookies.set('fakeNewsUserDetail', JSON.stringify(res.data.data), {
      expires: time
    })

    return res
  } catch (err) {
    toast.error('Something Went wrong or User not found.')
    return false
  }
}

const SignupAPI = async (body) => {
  try {
    const res = await helperAPI.postRequest('/api/User/SaveUser', body)
    return res
  } catch (err) {
    if (body.LoginType === 1 || body.LoginType === 2) {
      toast.success('User already exist. Logging in ...')
    } else {
      toast.error('Something Went wrong or user already exist.')
    }
    return err
  }
}

const updateUserAPI = async (body) => {
  const time = new Date(new Date().getTime() + 1000 * 60 * 120)
  const res = await helperAPI.putRequest('/api/User/UpdateUser', body)
  toast.success('Data updated Successfully.')
  Cookies.set('fakeNewsUserDetail', JSON.stringify(res.data.data), {
    expires: time
  })
  return res
}

const getUserByIdAPI = async (body) => {
  try {
    const res = await helperAPI.getRequest(`/api/User/GetUserById/id=${body}`)
    return res.data.data
  } catch (err) {
    console.log('getuserbyid', err)
  }
}

const googleLogin = async (body) => {
  const res = await helperAPI.postRequest('/api/User/LoginUserWithGoogle', body)
  return res
}

const forgetPassword = async (body) => {
  const res = await helperAPI.getRequest(
    `/api/User/ForgotPasswordByUserEmail?email=${body}`
  )
  return res
}

const confirmNewPassword = async (body) => {
  const res = await helperAPI.postRequest('/api/User/UpdateNewPassword', body)
  return res
}

export {
  LoginAPI,
  SignupAPI,
  updateUserAPI,
  getUserByIdAPI,
  googleLogin,
  forgetPassword,
  confirmNewPassword
}
