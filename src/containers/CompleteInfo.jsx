import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import Cookies from 'js-cookie'
import { updateUserAPI } from '../API/LoginAPI'

import CompleteInfoComponent from '../pages/CompleteInfoComponent'

class CompleteInfo extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      Id: 1,
      Age: '',
      Gender: 0,
      PhoneNo: ''
    }
  }

  handleGenderChange = (gender) => {
    this.setState({ Gender: gender })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitResponse = async (event) => {
    event.preventDefault()

    const data = {
      Id: JSON.parse(Cookies.get('fakeNewsUserDetail')).Id,
      PhoneNo: this.state.PhoneNo,
      Gender: this.state.Gender,
      Age: parseInt(this.state.Age)
    }

    try {
      const res = await updateUserAPI({ ...data })
      if (res) {
        this.props.history.push('/select-category')
      }
    } catch {}
  }

  render() {
    return (
      <CompleteInfoComponent
        data={this.state}
        handleGenderChange={this.handleGenderChange}
        handleChange={this.handleChange}
        submitResponse={this.submitResponse}
      />
    )
  }
}

export default withRouter(CompleteInfo)
