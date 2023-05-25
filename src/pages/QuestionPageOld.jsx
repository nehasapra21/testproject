import React, { useEffect, useState, useLayoutEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import ReactDOM from 'react-dom'
import { IMG_URL } from '../constants'

import quesImg from '../assets/images/whiteHouse.jpg'
import ButtonComponent from '../components/Button'
import { ques } from '../assets/svg'

const QuestionsPage = (props) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [key, setkey] = useState()

  const [timer, setTimer] = useState(45)

  const { question, noOfQues, next, handleAnswer, play, isDisabled } = props

  let countdown = 45

  useEffect(() => {
    let circle = document.getElementById('anime-circle')
    circle.classList.add('active')

    let countdownNumberEl = document.getElementById('countdown-number')
    countdownNumberEl.textContent = countdown

    const timerInterval = setInterval(() => {
      if (countdown === 1) {
        handleAnswer(3, question, countdown)
      }
      countdown = --countdown <= 0 ? 45 : countdown
      setTimer(countdown)

      countdownNumberEl.textContent =
        countdown.toString().length === 1 ? `0${countdown}` : countdown
    }, 1000)
    return () => {
      clearInterval(timerInterval)
    }
  }, [question])

  useLayoutEffect(() => {
    setWindowSize(window.innerWidth)
  }, [window.innerWidth])

  const handleTimerStroke = () => {
    if (next + 1 < noOfQues) {
      let circle = document.getElementById('anime-circle')
      circle.classList.remove('active')
    }
  }

  return (
    <Container fluid className='ques-page-container'>
      <Row className='ques-details'>
        <Col md={2} xs={12} className='ques-number'>
          <p>
            Question {next + 1}/{noOfQues}
          </p>
        </Col>
        {windowSize < 552 ? (
          <div className='timer-wrapper'>
            <div className='timer'>
              <div id='countdown'>
                <div id='countdown-number'></div>
                <svg>
                  <circle r='30' cx='40' cy='40' id='anime-circle'></circle>
                </svg>
              </div>
            </div>
          </div>
        ) : null}
        {windowSize < 552 ? (
          <>
            <Col md={4} sm={12} xs={12} className='ques-info'>
              <p>{question.Title}</p>
            </Col>
            <Col md={6} sm={12} xs={12}>
              <div className='ques-img-wrapper'>
                {question && question?.ThumbImageUrl ? (
                  <img
                    src={`${IMG_URL}${question.ThumbImageUrl}`}
                    alt='ques-img'
                  />
                ) : (
                  <iframe
                    src={question.ImageOrYouTubeUrlPath}
                    className='ques-video-iframe'
                    width={'100%'}
                    height={'100%'}
                  />
                )}
              </div>
            </Col>
          </>
        ) : (
          <>
            <Col md={6} xs={12}>
              <div className='ques-img-wrapper'>
                {question && question.ThumbImageUrl ? (
                  <img
                    src={`${IMG_URL}${question.ThumbImageUrl}`}
                    alt='ques-img'
                  />
                ) : (
                  <iframe
                    src={question.ImageOrYouTubeUrlPath}
                    className='ques-video-iframe'
                    width='auto'
                    height={'300px'}
                  />
                )}
              </div>
            </Col>
            <Col md={4} xs={12} className='ques-info'>
              <p>{question.Title}</p>
            </Col>
          </>
        )}
      </Row>
      <div className='answer-div'>
        <div className='answer-btns'>
          {windowSize < 552 ? (
            <div className='down-btn-wrapper' style={{ padding: '0 15px' }}>
              <div className='half-btns'>
                <ButtonComponent
                  variant='purple half-btn'
                  text='No'
                  onClick={() => {
                    handleTimerStroke()
                    handleAnswer(0, question, timer)
                  }}
                  isDisabled={isDisabled}
                />
                <ButtonComponent
                  variant='purple half-btn'
                  text='Yes'
                  onClick={() => {
                    handleTimerStroke()
                    handleAnswer(1, question, timer)
                  }}
                  isDisabled={isDisabled}
                />
              </div>
              <ButtonComponent
                variant='white full-btn'
                text='I havent came across it'
                onClick={() => {
                  handleTimerStroke()
                  handleAnswer(2, question, timer)
                }}
                isDisabled={isDisabled}
              />
            </div>
          ) : (
            <>
              <ButtonComponent
                variant='purple half-btn'
                text='No'
                onClick={() => {
                  handleTimerStroke()
                  handleAnswer(0, question, timer)
                }}
                isDisabled={isDisabled}
              />
              <ButtonComponent
                variant='purple half-btn'
                text='Yes'
                onClick={() => {
                  handleTimerStroke()
                  handleAnswer(1, question, timer)
                }}
                isDisabled={isDisabled}
              />
              <ButtonComponent
                variant='white full-btn'
                text='I havent came across it'
                onClick={() => {
                  handleTimerStroke()
                  handleAnswer(2, question, timer)
                }}
                isDisabled={isDisabled}
              />
            </>
          )}
        </div>
        {windowSize < 552 ? null : (
          <div className='timer'>
            <div id='countdown'>
              <div id='countdown-number'></div>
              <svg>
                <circle r='70' cx='80' cy='80' id='anime-circle'></circle>
              </svg>
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}

export default QuestionsPage
