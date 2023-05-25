import { configureStore } from '@reduxjs/toolkit'
import loginLogoutReducer from './loginLogout'

const rootReducer = {
  loginLogout: loginLogoutReducer
}

export default configureStore({
  reducer: rootReducer,
  devTools: true
})
