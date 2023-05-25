import { configureStore } from '@reduxjs/toolkit'
import UserDetails from './redux/reducers/counterSlice'
export default configureStore({
  reducer: {
    counter: UserDetails
  }
})
