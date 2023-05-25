import React from 'react'

import { Container, Row } from 'react-bootstrap'

import { handIcon } from '../assets/svg'

const TermsAndConditions = () => {
  const conditions = [
    'Fake News or Not is a flagship game of Govern.',
    'Through Fake News or Not, one can play an individual game which checks the person’s FQ.',
    'Any person playing the online game on the Fake News or Not website shall be bound by these Terms and Conditions, and all other rules, regulations and terms of use referred to herein or provided by Fake News or Not.',
    'Fake News or Not shall be entitled to modify these Terms and Conditions, rules, instructions and terms of use at any time, by posting the same on this website.',
    'Fake News or Not may, at its sole and absolute discretion, restrict, suspend, or discontinue all or any part of the game.',
    'Fake News or Not includes a combination of content created by Fake News or Not, its partners, licensors, associates and/or players. The intellectual property rights in all software underlying this website and material published (but not limited to) the game, content, design, graphics, advertisements, images, illustrations, marks, logos, audio or video clippings and Flash animation, is owned by Fake News or Not, its partners, licensors and/or associates. The players may not modify, transmit or participate in the transfer or sale of our game elsewhere or in any way exploit any of the materials or content on Fake News or Not, in whole or in part.',
    'The users are solely responsible for all materials (whether publicly posted or privately transmitted) that they upload, e-mail or otherwise make available on Fake News or Not, or share to the third-party applications.',
    'Users agree to abide by these Terms and Conditions and all other rules, regulations and terms of use of the website.',
    'The users agree not to use Fake News or Not to engage in any obscene, offensive, indecent, racial, communal, anti-national, objectionable, defamatory or abusive action or communication.',
    `Users may contact ${(
      <a href='mailto:contact@fakenewsornot.in' className='mail-anchor'>
        contact@fakenewsornot.in
      </a>
    )} for any queries, as appropriate.`,
    'In order to register for the game, participants may accurately provide their information viz. name or user name, e-mail address, mobile number, password and date of birth.',
    'Users may also be required to confirm that they have read, and shall abide by these Terms and Conditions before starting the game.',
    'The game can be played by any person above the age of 12 years.',
    'The game is open to anybody residing in or outside India.'
  ]

  return (
    <Container style={{ marinTop: '50px' }} className='gameRule-Container'>
      <h2 className='cat-page-head' style={{ textAlign: 'left' }}>
        Terms and conditions
      </h2>
      <Row className='rules-div terms-div'>
        {conditions &&
          conditions.map((rule, index) => {
            return (
              <p className='rule' key={index}>
                <span className='hand-bullet'>{handIcon}</span>
                {rule}
              </p>
            )
          })}
      </Row>
    </Container>
  )
}

export default TermsAndConditions
