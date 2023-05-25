import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'
import reportWebVitals from './reportWebVitals'

import store from './redux/store'
import { Provider } from 'react-redux'
import AppLoader from './components/Loader/AppLoader'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={AppLoader}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
