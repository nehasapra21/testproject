import React, { PureComponent } from 'react'
import Cookies from 'js-cookie'
import { withRouter } from 'react-router-dom'
import { updateUserAPI } from '../API/LoginAPI'
import { ImageUpload } from '../API/ProfileAPI'
import getMyAccountDetail from '../API/GetMyAccount'
import ProfileUpdateComponent from '../pages/ProfileUpdateComponent'
import { toast } from 'react-toastify'

import { login } from '../redux/loginLogout'
import { connect } from 'react-redux'

class ProfileUpdate extends PureComponent {
  constructor(props) {
    super(props)

    const localdata = JSON.parse(Cookies.get('fakeNewsUserDetail'))
    this.state = {
      Id: localdata.Id,
      FirstName: localdata.FirstName,
      LastName: localdata.LastName,
      Age: parseInt(localdata.Age),
      EmailAddress: localdata.EmailAddress,
      Gender: localdata.Gender,
      PhoneNo: localdata.PhoneNo,
      ProfileImage: localdata.ProfileImage,
      tempImage: '',
      DateOfBirth: localdata.DateOfBirth
    }
  }

  // Taking resposnse and sending to components
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleAgeChange = (e) => {
    this.setState({
      Age: parseInt(e.target.value)
    })
  }
  handleGenderChange = (gender) => {
    this.setState({ Gender: gender })
  }
  imagehandleChange = (e) => {
    this.setState(
      {
        tempImage: e.target.files[0]
      },
      () => {
        this.uploadImage()
      }
    )
  }

  uploadImage = async () => {
    let formData = new FormData()
    formData.append('files', this.state.tempImage)
    formData.append('Id', this.state.Id)
    try {
      const res = await ImageUpload(formData)
      this.setState({ ProfileImage: res.data.data.FilePath })
      toast.success('image uploaded successfully.')
    } catch {
      toast.error('Upload image failed.')
    }
  }

  submitResponse = async (event) => {
    event.preventDefault()
    if (this.state.tempImage !== '') {
      try {
        const resdata = await updateUserAPI({ ...this.state })
        const userdata = await getMyAccountDetail()
        this.props.loginUser(userdata)
        Cookies.set('fakeNewsUserDetail', JSON.stringify(userdata.data.data))
      } catch (err) {
        toast.error('Unable to update user.')
      }
    } else {
      try {
        await updateUserAPI({ ...this.state })
        const userdata = await getMyAccountDetail()
        Cookies.set('fakeNewsUserDetail', JSON.stringify(userdata.data.data))
      } catch (err) {
        toast.error('Unable to update user.')
      }
    }
  }

  render() {
    return (
      <ProfileUpdateComponent
        userData={this.state}
        handleImageChange={this.handleImageChange}
        handleChange={this.handleChange}
        submitResponse={this.submitResponse}
        handleGenderChange={this.handleGenderChange}
        imagehandleChange={this.imagehandleChange}
        handleAgeChange={this.handleAgeChange}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return { loggedStatus: state.loginLogout.isLoggedIn }
}

const mapDispatchToProps = (dispatch) => {
  return { loginUser: (response) => dispatch(login(response)) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfileUpdate))
