import React, { PureComponent } from 'react'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter as Router } from 'react-router-dom'

import { checkData } from './redux/loginLogout'
import { connect } from 'react-redux'

import './App.css'
import './responsive.css'
import 'react-loading-skeleton/dist/skeleton.css'
import Routes from './routes'
import ErrorBoundary from './components/ErrorBoundary'

import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'
class App extends PureComponent {
  componentDidMount = () => {
    this.props.checkUserdata()
  }

  render() {
    return (
      <div className='App'>
        <ToastContainer
          position='top-right'
          autoClose='1250'
          closeButton='false'
        />
        <ErrorBoundary>
          <Router>
            <Routes />
          </Router>
        </ErrorBoundary>
      </div>
    )
  }
}

const mapDispatchToprops = (dispatch) => {
  return { checkUserdata: () => dispatch(checkData()) }
}

export default connect(null, mapDispatchToprops)(App)
