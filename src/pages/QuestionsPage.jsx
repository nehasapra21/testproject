/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'

import { IMG_URL } from '../constants'

import AppWrapper from '../components/AppContainer'

import stopwatchIcon from '../assets/images/stopwatch.png'

const QuestionsPage = (props) => {
  const [timer, setTimer] = useState(45)

  const { question, noOfQues, next, handleAnswer } = props

  let countdown = 45

  useEffect(() => {
    let countdownNumberEl = document.getElementById('countdown-numbernew')
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

  return (
    <>
      <AppWrapper>
        <Row className='upper-wrapper'>
          <Col lg={12} xs={12} md={12}>
            <div className='quiz-image-wrapper'>
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

          <div className='display-flex'>
            <div className='question-count'>
              Questions
              <p className='text-bold'>
                {next + 1}/{noOfQues}
              </p>
            </div>
            <div className='question--count'>
              <img src={stopwatchIcon} />
              &nbsp;
              <span>Time Left</span>
              <p className='text-bold float-rigt' id='countdown-numbernew'></p>
            </div>
          </div>
        </Row>
        <Row>
          <Col lg={12}>
            <div className='question-wrapper'>
              <p>{question.Title}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <button
              className='ans-button'
              onClick={() => {
                handleAnswer(1, question, timer)
              }}
            >
              Yes
            </button>
            <button
              className='ans-button'
              onClick={() => {
                handleAnswer(0, question, timer)
              }}
            >
              No
            </button>
            <button
              className='ans-button'
              onClick={() => {
                handleAnswer(2, question, timer)
              }}
            >
              I haven't came across
            </button>
          </Col>
        </Row>
      </AppWrapper>
    </>
  )
}

export default QuestionsPage
