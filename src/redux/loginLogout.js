import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

export const loginLogout = createSlice({
  name: 'loginLogout',
  initialState: {
    data: {},
    isLoggedIn: false,
    haveCategories: false
  },
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        data: { ...action.payload.data.data },
        isLoggedIn: true
      }
    },
    logOut: (state, action) => {
      return {
        ...state,
        data: {},
        isLoggedIn: false
      }
    },
    checkData: (state, action) => {
      let data = Cookies.get('fakeNewsUserDetail')
        ? JSON.parse(Cookies.get('fakeNewsUserDetail'))
        : {}
      let loggedStatus = Cookies.get('fakeNewsUserStatus') ? true : false
      return {
        ...state,
        data: { ...data },
        isLoggedIn: loggedStatus
      }
    },
    setUpdateData: (state, action) => {
      return {
        ...state,
        data: { ...action.payload.data },
        isLoggedIn: true
      }
    }
  }
})

export const { login, logOut, checkData, setUpdateData } = loginLogout.actions

export default loginLogout.reducer
