import React from 'react'

import { Container, Row } from 'react-bootstrap'

import { handIcon } from '../assets/svg'

const PrivacyPolicy = () => {
  const policy = [
    'Fake News or Not and its related entities consider your privacy to be of paramount importance and will thus never invade it. This Privacy Policy covers how it collects and uses any information you may provide when visiting the website. This Policy applies to the gaming services offered by Fake News or Not which includes data collected during the game, features on the website, images and content accessed by users through third-party websites or sources.',
    'When you visit the website, we may collect and record your information for using our services. Fake News or Not may collect personal and non-personal information while you are using our service. This can include registration for services, response to the game questions, information of accessing services through a third party such as social networking sites, your score information, your FQ, using the “invite” or “share” feature, requesting technical support and otherwise through use of Fake News or Not services where data is required for playing.',
    'The data we collect may include, but is not limited to, your name, username, password, device ID, IP address and email. We may supplement your data with data received from third parties. This will include your profile image, demographic data and other analytics. This information is only used to personalise the game for the user Any information collected will only be used to support your gameplay experience and will never be misused in any manner.',
    'If you log into the website using a third-party site or a social media platform, you represent and warrant that (i) your access and use of such features in connection with the game comply with the applicable terms and policies of such site or platform; and (ii) that you are at least 12 years of age. We do not collect any personal information pertaining to a person’s credit card or other billing information as Fake News or Not is an unpaid website game.',
    'The gaming service can offer integrations with sharing services and tools viz. Facebook Like or Google +1 button, etc.), that can be used to share information or take actions after having played the game. We may also integrate social media services into our game in order to facilitate sharing of scores and inviting friends and contacts for playing the game.',
    'We may use your information for various purposes, including to provide, maintain and improve the website; send you related information; personalise and improve the game; monitor and analyse trends; or carry out any other purpose for which the information may be required. By accepting our Privacy Policy or otherwise providing information to us, you consent to us collecting and using your information, as well as storing and processing it as deemed necessary. Fake News or Not will store your data for as long as necessary in order to provide you with the game or otherwise fulfil the purposes as described above. The information will be stored further if in order to establish, exercise or defend a legal claim or to comply with applicable law, including accounting rules.',
    'We may disclose your personal information if we are required or authorised to disclose by law or by a law enforcement agency, to our business partners as and when required and deemed fit. Our game can be played by anybody above the age of 12 years, who understands English or other available languages.By using the services by Fake News or Not and by giving the company consent, the users (players) agree to the terms and conditions of this Privacy Policy, and also consent to the collection, use and disclosure of your information by us in accordance with the terms and conditions of this Privacy Policy. If you do not agree to the terms and conditions of this Privacy Policy, please do not play.',
    'Users agree to abide by these Terms and Conditions and all other rules, regulations and terms of use of the website.',
    `We reserve the right to revise, modify and update this Privacy Policy from time to time, as per our new features and policy updates. Your continued use will signify your acceptance of the changes to this Privacy Policy.For any queries on our Privacy Policy, write to us on ${(
      <a href='mailto:contact@fakenewsornot.in' className='mail-anchor'>
        contact@fakenewsornot.in
      </a>
    )}`
  ]

  return (
    <Container style={{ marinTop: '50px' }} className='gameRule-Container'>
      <h2 className='cat-page-head' style={{ textAlign: 'left' }}>
        Privacy Policy
      </h2>
      <Row className='rules-div terms-div'>
        {policy &&
          policy.map((rule, index) => {
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

export default PrivacyPolicy
