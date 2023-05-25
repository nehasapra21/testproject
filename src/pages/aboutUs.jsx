import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import registerImg from '../assets/images/register.png'

const AboutUs = () => {
  useEffect(() => {
    let body = document.getElementsByTagName('body')

    body[0].style.backgroundColor = '#fff'

    const setBodyBack = () => {
      body[0].style.backgroundColor = '#edeff4'
    }

    return setBodyBack
  }, [])

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
          <div className='about-us-div'>
            <h1 className='about-head'>About Us</h1>
            <p className='about-us-info'>
              The brainchild of The Logical Indian Co-founder Bharat Nayak &
              Govern, Fake News or Not is the world’s first-and-only interactive
              game website that tests fake news identification in people. A
              unique, first-of-its-kind game, it calculates a person’s
              Fact-check Quotient (FQ) based on his responses to 10 questions.
              These questions are news bytes in the form of pictures, links or
              videos to which the person responds in “Yes”, “No” or “I haven’t
              come across it”. Based on the responses, a score is generated
              which calculates what percentage of FQ does he/she have. After
              undertaking the test, the person is educated, through multiple
              tools, on the identification of fake news.
            </p>
            <p className='about-us-info'>
              Fake News or Not is an effort to educate people on the Dos and
              Don’ts of following and sharing news on digital media. The recent
              years have witnessed a spike in the incidents being incited
              through the spread of fake news and misinformation. The concept of
              viral news has gone berserk, with people sparking rumours without
              understanding the effects or anticipating the aftermath of the
              false information they spread. This has led to a much angrier and
              violent world. Through Fake News or Not, you can check your
              Fact-check Quotient and see if you are on the right side or the
              wrong. It’s time we began looking at what we see or read. Because
              there is no room for rumours in today’s 24*7 internet-savvy world.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutUs
