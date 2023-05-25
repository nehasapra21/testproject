import React from 'react'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'

import helperAPI from './index'

const LoginActivity = async (body) => {
  try {
    const res = await helperAPI.postRequest('/api/User/SaveUserActivity', body)
    return res
  } catch (err) {
    toast.error('Something Went wrong or activy manager not working.')
    return false
  }
}




export { LoginActivity }
