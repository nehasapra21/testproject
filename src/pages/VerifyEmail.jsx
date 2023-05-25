import React, { useState } from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import Card from '../components/Cards/Card'
import registerImg from '../assets/images/register.png'
import FormComponents from '../components/FormComponents'
import ButtonComponent from '../components/Button'
import { forgetPassword } from '../API/LoginAPI'
import { toast } from 'react-toastify'

const VerifyEmail = () => {
  const [email, setEmail] = useState('')

  const history = useHistory()

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const submitResponse = async (e) => {
    e.preventDefault()

    try {
      const response = await forgetPassword(email)
      toast.success('Email sent successfully.')
      history.push('/login')
    } catch (err) {
      toast.error('Unable to sent email.')
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
            {/* <SocialLoginComponent
              responseGoogle={responseGoogle}
              responseFacebook={responseFacebook}
            /> */}
            <p className='login-para'>Enter Your Email for verification</p>
            <Form onSubmit={submitResponse} autoComplete={false}>
              <FormComponents
                type='email'
                value={email}
                onChange={handleChange}
                name='email'
                label='EMAIL'
                control='input'
                Placeholder='demo@gmail.com'
                required
              />

              {/* <FormComponents
                type='password'
                value={Password}
                onChange={handleChange}
                name='Password'
                label='PASSWORD'
                control='input'
                Placeholder='******'
                required
              /> */}

              <ButtonComponent
                style={{ width: '100%', margin: '10px 0 25px' }}
                type='submit'
                variant='purple submit-btn'
                text='Verify'
              />

              {/* <ButtonComponent
                style={{ marginTop: '25px' }}
                variant='transparent'
                text='Create Account'
                onClick={() => history.push('/sign-up')}
              /> */}
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default VerifyEmail
