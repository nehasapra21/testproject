import React, { useState } from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'

import Card from '../components/Cards/Card'
import registerImg from '../assets/images/register.png'
import FormComponents from '../components/FormComponents'
import ButtonComponent from '../components/Button'
import { confirmNewPassword } from '../API/LoginAPI'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const ForgetPassword = () => {
  const [states, setStates] = useState({
    newPassword: '',
    confirmPassword: ''
  })
  const [token, setToken] = useState('')
  const params = useParams()
  const history = useHistory()

  useEffect(() => {
    console.log('location', params)
    let { id } = params
    id = id.replace('token=', '')

    if (id || id !== '' || id.length !== 0) {
      setToken(id)
    }
  }, [params])

  const handleChange = (e) => {
    setStates((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const submitResponse = async (e) => {
    e.preventDefault()

    if (token === '') {
      toast.error('Authentication token missing')
      return false
    }

    if (states?.newPassword !== states?.confirmPassword) {
      toast.error('Passoword Mismatch.')
      return false
    }

    try {
      const response = await confirmNewPassword({
        password: states?.newPassword,
        token
      })
      toast.success('Password updates successfully.')
      history.push('/login')
    } catch (err) {
      toast.error('Unable to update your password.')
      history.push('/login')
      //err goes here
    }
  }

  return (
    <Container className='cont-top-margin login-background'>
      <Row>
        <Col className='login-theme-image' xs={12} md={7}>
          <img
            src={registerImg}
            alt='login-img'
            style={{ width: '70%', alignItems: 'center' }}
          />
        </Col>
        <Col className='login-form' xs={12} md={5}>
          <Card className='login-border'>
            <p className='login-para'>Enter A New Password</p>
            <Form onSubmit={submitResponse} autoComplete={false}>
              <FormComponents
                type='text'
                value={states?.newPassword}
                onChange={handleChange}
                name='newPassword'
                label='New Password'
                control='input'
                placeholder='New Password'
                required
              />

              <FormComponents
                type='password'
                value={states?.confirmPassword}
                onChange={handleChange}
                name='confirmPassword'
                label='Confirm Password'
                control='input'
                placeholder='******'
                required
              />

              <ButtonComponent
                style={{ width: '100%', margin: '10px 0 25px' }}
                type='submit'
                variant='purple submit-btn'
                text='Change Password'
              />
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default ForgetPassword
