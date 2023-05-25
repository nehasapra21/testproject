import React, { useEffect } from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'

import registerImg from '../assets/images/register.png'

const FAQ = () => {
  useEffect(() => {
    let body = document.getElementsByTagName('body')

    body[0].style.backgroundColor = '#fff'

    const setBodyBack = () => {
      body[0].style.backgroundColor = '#edeff4'
    }

    return setBodyBack
  }, [])

  const faqs = [
    {
      title: 'Will I have to login every time I play this game?',
      body: (
        <p className='faq-body-para'>
          Ans. No, you don’t have to login repeatedly. You will just have to
          sign up the first time you play the game.
        </p>
      )
    },
    {
      title: 'How can I verify my profile?',
      body: (
        <p className='faq-body-para'>
          Ans. You’ll receive one verification mail from our gaming platform,
          your profile will be verified as soon as you verify your Email ID.
        </p>
      )
    },
    {
      title: 'Will I get any benefit if I invite a friend?',
      body: (
        <p className='faq-body-para'>
          Ans. Yes, both you and your friend will receive 100 points each on
          their first game, if they use your invite link.
        </p>
      )
    },
    {
      title: 'Can you suggest some fact checking websites?',
      body: (
        <>
          <p className='faq-body-para'>
            Ans. Yes, here are some Fact checking websites:
          </p>
          <ul className='faq-list'>
            <li>
              <a
                href='https://www.altnews.in/'
                target='_blank'
                rel='noreferrer'
              >
                Alt
              </a>
            </li>
            <li>
              <a
                href='https://www.altnews.in/'
                target='_blank'
                rel='noreferrer'
              >
                News
              </a>
            </li>
            <li>
              <a
                href='https://www.boomlive.in/'
                target='_blank'
                rel='noreferrer'
              >
                Boom Live
              </a>
            </li>
            <li>
              <a
                href='https://www.thequint.com/news/webqoof'
                target='_blank'
                rel='noreferrer'
              >
                WebQoof
              </a>
            </li>
            <li>
              <a
                href='https://www.indiatoday.in/'
                target='_blank'
                rel='noreferrer'
              >
                India Today
              </a>
            </li>
            <li>
              <a
                href='https://newschecker.in/'
                target='_blank'
                rel='noreferrer'
              >
                Newschecker
              </a>
            </li>
          </ul>
          <p className='faq-body-para'>
            You can also go through this article to know more about some fact
            checking websites.
          </p>
        </>
      )
    },
    {
      title:
        'Are there any workshops where we can learn how to debunk Fake News?',
      body: (
        <p className='faq-body-para'>
          Ans. Yes, you can sign up for workshops on our website and you’ll
          receive further details on your Email ID.
        </p>
      )
    },
    {
      title: 'Can I contribute Fake News for the game?',
      body: (
        <p className='faq-body-para'>
          Ans. Yes, there will be a separate section under the menu section.
          You’ll be redirected to a whatsapp number where you can send the fake
          news and become a contributor.
        </p>
      )
    },
    {
      title: 'What is the preferred language on the website?',
      body: (
        <p className='faq-body-para'>
          Ans. Currently the website is only available in English, we’ll be
          introducing Hindi very soon.
        </p>
      )
    }
  ]

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
          <div className='faq-div'>
            <h1 className='faq-head'>FAQ</h1>
            <Accordion defaultActiveKey='0' className='faq-accord'>
              {faqs.map((faq, index) => (
                <Accordion.Item
                  eventKey={`${index}`}
                  key={index}
                  className='faq-item'
                >
                  <Accordion.Header className='faq-accord-head'>
                    {faq.title}
                  </Accordion.Header>
                  <Accordion.Body className='faq-accord-body'>
                    {faq.body}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default FAQ
