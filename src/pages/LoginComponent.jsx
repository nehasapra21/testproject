import React, { useEffect } from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
import Card from '../components/Cards/Card'
import registerImg from '../assets/images/register.png'
import SocialLoginComponent from '../pages/SocialLoginComponent'
import FormComponents from '../components/FormComponents'
import ButtonComponent from '../components/Button'

const LoginComponent = (props) => {
   let isUserLogged = Cookies.get('fakeNewsUserStatus') ? true : false

  useEffect(() => {
    let body = document.getElementsByTagName('body')

    body[0].style.backgroundColor = '#fff'

    const setBodyBack = () => {
      body[0].style.backgroundColor = '#edeff4'
    }

    return setBodyBack
  }, [])

  const {
    responseGoogle,
    submitResponse,
    data,
    handleChange,
    responseFacebook
  } = props
  const { EmailAddress, Password } = data
  const history = useHistory()

  return (
       isUserLogged === true ? (
         <Redirect
            to={{ pathname: '/categories', state: { from: props.location } }}
          />
        ) : (
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
            <SocialLoginComponent
              responseGoogle={responseGoogle}
              responseFacebook={responseFacebook}
            />
            <p className='login-para'>or connect with your email</p>
            <Form onSubmit={submitResponse} autoComplete={false}>
              <FormComponents
                type='email'
                value={EmailAddress}
                onChange={handleChange}
                name='EmailAddress'
                label='EMAIL'
                control='input'
                Placeholder='demo@gmail.com'
                required
              />

              <FormComponents
                type='password'
                value={Password}
                onChange={handleChange}
                name='Password'
                label='PASSWORD'
                control='input'
                Placeholder='******'
                required
              />

              <ButtonComponent
                style={{ width: '100%', margin: '10px 0 25px' }}
                type='submit'
                variant='purple submit-btn'
                text='Login'
              />
              <p
                className='forget-txt'
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  history.push('/verify-email')
                }}
              >
                Forget Password ?
              </p>
              <ButtonComponent
                style={{ marginTop: '25px' }}
                variant='transparent'
                text='Create Account'
                onClick={() => history.push('/sign-up')}
              />
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
        )
   
  )
}
export default LoginComponent
