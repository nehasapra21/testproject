/* eslint-disable no-lone-blocks */
import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props)
    {
      this.state = {
        hasError: false
      }
    }
  }

  static getDerivedStateFromError = (error) => {
    return {
      hasError: true
    }
  }

  componentDidCatch = (error, info) => {
    console.log('error', error)
    console.log('err info', info)
  }

  render() {
    if (this.state.hasError) {
      return null
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundary
