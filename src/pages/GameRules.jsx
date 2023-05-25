import React from 'react'
import { Container, Row } from 'react-bootstrap'

import { handIcon } from '../assets/svg'

import ButtonComponent from '../components/Button'

const GameRules = (props) => {
  const { history, location } = props

  const rules = [
    'To begin the game, sign up using any one of your three social media profiles; Google, Facebook or Twitter. If not you can also create a new account.',
    'After signing up, you must choose your topics of interest.',
    'Once selected, you can begin by clicking on “Start” button .',
    'You will be posed 15 questions, which must be answered using any of the two options. You will get 30 seconds for each question.',
    'You will be awarded 100 points for every correct answer and zero for every incorrect or skipped question.',
    'Your result will appear on the scoreboard at the end of the game.',
    'The final score will depend upon your accuracy and how fast you complete the quiz. The score will also reflect your FCQ.',
    'The correct answers and news links will be displayed in the end, helping you debunk fake news. You will also have the option to download and the PDF and watch a video tutorial on how to identify Fake News.',
    'Share your score on social media and also invite your friends to play the game.'
  ]

  return (
    <Container style={{ marinTop: '50px' }} className='gameRule-Container'>
      <h2 className='cat-page-head' style={{ textAlign: 'left' }}>
        Game rules and Instruction
      </h2>
      <Row className='rules-div'>
        {rules &&
          rules.map((rule, index) => {
            return (
              <p className='rule' key={index}>
                <span className='hand-bullet'>{handIcon}</span>
                {rule}
              </p>
            )
          })}
      </Row>
      <div className='down-btn-wrapper'>
        <ButtonComponent
          variant='purple select-cat-btn rule-button'
          text="Let's Start"
          onClick={() => {
            history.push(`/questions/${location?.state?.id}`)
          }}
        />
      </div>
    </Container>
  )
}

export default GameRules
