import React, { useEffect, useRef } from 'react'
import { Container, Row, Col, Form, ButtonGroup } from 'react-bootstrap'
import FormComponents from '../components/FormComponents'
import ButtonComponent from '../components/Button'
import registerImg from '../assets/images/profile-update-bg.PNG'
import Card from '../components/Cards/Card'
import { BASE_URL } from '../constants'
import { profileImage } from '../assets/svg'

const ProfileUpdateComponent = (props) => {
  const imageUpload = useRef(null)

  useEffect(() => {
    let body = document.getElementsByTagName('body')
    if (window.innerWidth < 552) {
      body[0].style.backgroundColor = '#edeff4'
    } else {
      body[0].style.backgroundColor = '#fff'
    }

    const setBodyBack = () => {
      body[0].style.backgroundColor = '#edeff4'
    }

    return setBodyBack
  }, [])

  const {
    userData,
    submitResponse,
    handleChange,
    handleGenderChange,
    imagehandleChange,
    handleAgeChange
  } = props
  return (
    <Container className='cont-top-margin-profile'>
      <Row>
        <Col className='login-img profile-img-col' xs={12} md={6}>
          <img src={registerImg} alt='register-img' />
        </Col>
        <Col className='login-form' xs={12} md={6}>
          <Card>
            <Form onSubmit={submitResponse} autoComplete={false}>
              <div className='image-upload'>
                {userData.ProfileImage && userData.ProfileImage !== '' ? (
                  <img
                    src={`${BASE_URL}${userData.ProfileImage}`}
                    className='profileupdateimage'
                    name='ProfileImage'
                    alt='profile-img'
                  />
                ) : (
                  <div className='profile-img-div'>{profileImage} </div>
                )}
                <p
                  className='upload-trigger'
                  onClick={() => imageUpload.current.click()}
                >
                  Upload Image
                </p>
                <input
                  id='file-input'
                  type='file'
                  ref={imageUpload}
                  onChange={imagehandleChange}
                  accept='image/*'
                />
              </div>

              <FormComponents
                name='FirstName'
                type='text'
                label='First Name'
                control='input'
                value={userData.FirstName}
                onChange={handleChange}
              />
              <FormComponents
                name='LastName'
                type='text'
                label='Last Name'
                control='input'
                value={userData.LastName}
                onChange={handleChange}
              />

              <FormComponents
                name='EmailAddress'
                type='text'
                label='Email Address'
                control='input'
                disabled
                value={userData.EmailAddress}
                onChange={handleChange}
              />
              <FormComponents
                name='PhoneNo'
                type='number'
                label='Mobile Number'
                control='input'
                value={userData.PhoneNo}
                onChange={handleChange}
              />
              <FormComponents
                name='Age'
                type='number'
                label='Your Age'
                control='input'
                value={parseInt(userData.Age)}
                onChange={handleAgeChange}
              />
              <FormComponents
                name='DateOfBirth'
                type='date'
                label='Date Of Birth'
                control='input'
                value={userData.DateOfBirth}
                onChange={handleChange}
              />

              <ButtonGroup aria-label='Basic example' className='gender-btns'>
                <ButtonComponent
                  variant='group-btn'
                  onClick={() => handleGenderChange('Male')}
                  name='Gender'
                  id={`${userData.Gender === 'Male' ? 'active' : ''}`}
                  text='Male '
                ></ButtonComponent>
                <ButtonComponent
                  variant='group-btn'
                  onClick={() => handleGenderChange('Female')}
                  name='Gender'
                  id={`${userData.Gender === 'Female' ? 'active' : ''}`}
                  text='Female'
                ></ButtonComponent>
                <ButtonComponent
                  variant='group-btn'
                  onClick={() => handleGenderChange('Other')}
                  name='Gender'
                  id={`${userData.Gender === 'Other' ? 'active' : ''}`}
                  text='Other'
                ></ButtonComponent>
              </ButtonGroup>
              <ButtonComponent
                variant='purple'
                text='Save'
                type='submit'
                onClick={submitResponse}
                style={{
                  display: 'block',
                  margin: '0 auto',
                  width: '80%'
                }}
              />
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default ProfileUpdateComponent
