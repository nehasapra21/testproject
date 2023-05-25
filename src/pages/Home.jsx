import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import newspaper from '../assets/images/fake_news.png'
import ButtonComponent from '../components/Button'
import HomeImage from '../components/HomeImage'
import { fakeNewsMobileLogo } from '../assets/svg/index'

const Home = () => {
  const history = useHistory()

  useEffect(() => {
    let body = document.getElementsByTagName('body')

    body[0].style.backgroundColor = '#494989'

    const setBodyBack = () => {
      body[0].style.backgroundColor = '#EDEFF4'
    }

    return setBodyBack
  }, [])

  return (
    <Container fluid className='home-page-container'>
      <h1 className='primary-header'>
        <span className='mobile-logo'>{fakeNewsMobileLogo}</span>
        <span className='second-primary-header '>Fake News or Not</span>
      </h1>
      <Row>
        <Col xs={0} lg={4}>
          <div className='newspaper-div'>
            <img className='newspaper-img' alt='newspaper' src={newspaper} />
          </div>
        </Col>
        <Col
          xs={12}
          lg={4}
          sm={12}
          className='image-home'
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <HomeImage />
        </Col>
        <Col xs={0} lg={4}></Col>
      </Row>
      <Row>
        <Col xs={0} lg={4}></Col>
        <Col xs={12} lg={4}>
          <div className='home-info'>
            <p className='common-text home-text'>
              Debunking false news the fun way! How much fake news do you
              consume everyday?
            </p>
            <h2 className='sub-header'>Let's find out.</h2>
          </div>
        </Col>
        <Col
          xs={12}
          lg={4}
          style={{ alignItems: 'center', display: 'inline-flex' }}
        >
          <ButtonComponent
            variant='white home-play-btn'
            text='Play'
            onClick={() => history.push('/categories')}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Home
