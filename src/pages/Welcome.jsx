import React, { useEffect, useState, useLayoutEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'

import ButtonComponent from '../components/Button'

import welcomeImg from '../assets/images/welcome.png'
import welcomeImgMob from '../assets/images/welcome-img-mob.png'

const Welcome = () => {
  const [userData, setUserData] = useState({})
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const history = useHistory()

  useEffect(() => {
    const data = JSON.parse(Cookies.get('fakeNewsUserDetail'))
    setUserData({ ...data })
  }, [])

  useLayoutEffect(() => {
    setWindowSize(window.innerWidth)
  }, [])

  return (
    <Container fluid className='cont-top-margin'>
      <Row
        className='welcome-screen'
        style={{
          width: '100vw',
          overflow: 'hidden'
        }}
      >
        <Col xs={12} md={7}>
          <Container className='welcome-inter-cont'>
            <div className='welcome-div'>
              <h1 className='welcome-head'>Welcome!</h1>
              <h2 className='welcome-subhead'>{userData?.Name || ''}</h2>
              <p className='user-email'>{userData?.EmailAddress || ''}</p>
              <p className='welcome-txt'>
                Your answer to the next question will help us to find the right
                ideas for you
              </p>
              {windowSize > 552 ? (
                <ButtonComponent
                  variant='purple nxt-btn'
                  text='Next'
                  onClick={() => history.push('/complete-profile')}
                />
              ) : (
                <img
                  className='welcome-img'
                  src={welcomeImgMob}
                  alt='welcome-img'
                />
              )}
            </div>
          </Container>
        </Col>
        <Col xs={12} md={5} className='welcome-img-col'>
          {windowSize < 552 ? (
            <div className='down-btn-wrapper'>
              <ButtonComponent
                variant='purple nxt-btn'
                text='Next'
                onClick={() => history.push('/complete-profile')}
              />
            </div>
          ) : (
            <img className='welcome-img' src={welcomeImg} alt='welcome-img' />
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Welcome
