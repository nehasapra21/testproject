import React from 'react'

import { Button, Container, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Logout from '../API/Logout'
import {
  Abouticon,
  Story,
  Profile,
  Report,
  Blog,
  Faqs,
  Howplay,
  quizIcon,
  rankIcon,
  rewardIcon,
  verifyIcon,
  award,
  portfolio,
  ques,
  invite,
  goToLink,
  verifyTick,
  notVerify
} from '../assets/svg'

import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../redux/loginLogout'

const MyAccount = (props) => {
  const history = useHistory()
  const { setmenu } = props
  const { isLoggedIn, data } = useSelector((state) => state.loginLogout)
  const dispatch = useDispatch()

  const closeNav = () => {
    setmenu(false)
    document.getElementById('mySidenav').style.transform = 'translateX(100vw)'
  }

  const accountCardsData = [
    {
      title: 'Reward Points',
      icon: rewardIcon,
      number: data.TotalPoint,
      id: 0
    },
    {
      title: 'Quiz Played',
      icon: quizIcon,
      number: data.QuizPlayCount,
      id: 1
    },
    {
      title: 'Ranking',
      icon: rankIcon,
      number: data.Ranking,
      id: 2
    },
    {
      title: 'Profile Status',
      icon: verifyIcon,
      number: data.IsVerified === false ? 'Not Verified' : 'Verified',
      id: 3
    }
  ]

  const accList = [
    {
      showStatus: true,
      title: 'Leaderboard',
      icon: award,
      link: '/leaderboard'
    },
    {
      showStatus: false,
      title: 'Invite a friend',
      icon: invite,
      link: '/'
    },
    {
      showStatus: false,
      title: 'Get Suppport',
      icon: ques,
      link: '/'
    },
    {
      showStatus: true,
      title: 'Personal Details',
      icon: Profile,
      link: '/profile-update'
    },
    {
      showStatus: true,
      title: 'Intrested Categories',
      icon: portfolio,
      link: '/select-category'
    },
    {
      showStatus: true,
      title: 'Report',
      icon: Report,
      link: '/reports'
    },
    {
      showStatus: false,
      title: 'About',
      icon: Abouticon,
      link: '/about-us'
    },
    {
      showStatus: false,
      title: 'Our Story',
      icon: Story,
      link: '/our-story'
    },
    {
      showStatus: false,
      title: 'Blogs',
      icon: Blog,
      link: '/'
    },
    {
      showStatus: false,
      title: 'FAQs',
      icon: Faqs,
      link: '/'
    },
    {
      showStatus: false,
      title: 'How to play',
      icon: Howplay,
      link: '/'
    },
    {
      showStatus: false,
      title: 'Terms And Conditions',
      icon: Faqs,
      link: '/terms-and-conditions'
    },
    {
      showStatus: false,
      title: 'Privacy policy',
      icon: Faqs,
      link: '/privacy-policy'
    }
  ]

  return (
    <Container className='cont-top-margin gameRule-Container'>
      <div className='my-account-head-sec'>
        <h1 className='account-head'>My Account</h1>

        <div className='my-acc-back-btn-div'>
          <button
            className='back-home-btn'
            onClick={() => {
              closeNav()
              history.push('/categories')
            }}
          >
            Back To Home
          </button>
        </div>
      </div>

      <Row className='account-dets'>
        {isLoggedIn
          ? accountCardsData.map((cardData, index) => (
              <Col xs={6} key={index}>
                <div className='acc-info-card'>
                  <div className='icon-title-div'>
                    <div className='icon'>{cardData.icon}</div>
                    <div>
                      <h2 className={cardData.id === 3 ? 'val verify' : 'val'}>
                        {cardData.number}
                        {cardData.id === 3 ? (
                          <div className='verify-icon'>
                            {data.IsVerified ? verifyTick : notVerify}
                          </div>
                        ) : null}
                      </h2>
                      <p className='title'>{cardData.title}</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))
          : null}
      </Row>
      <div className='empty-div'></div>
      <div className='acc-list'>
        {accList.map((item, index) =>
          isLoggedIn ? (
            <div
              key={index}
              className='list-item'
              onClick={() => {
                closeNav()
                if (item.title === 'Blogs') {
                  window.open('http://blog.fakenewsornot.in/', '_blank')
                } else {
                  history.push(`${item.link}`)
                }
              }}
            >
              <div className='group'>
                <div className='icon'>{item.icon}</div>
                <p className='title'>{item.title}</p>
              </div>
              <div className='nxt-icon'>{goToLink}</div>
            </div>
          ) : item.showStatus === false ? (
            <div
              className='list-item-unauth'
              onClick={() => {
                closeNav()
                history.push(`${item.link}`)
              }}
            >
              <div className='group'>
                <div className='icon'>{item.icon}</div>
                <p className='title'>{item.title}</p>
              </div>
              <div className='nxt-icon'>{goToLink}</div>
            </div>
          ) : (
            ''
          )
        )}
        <Row>
          {isLoggedIn === true ? (
            <Button
              className='drawer-Button'
              onClick={() => {
                if (isLoggedIn) {
                  dispatch(logOut())
                  Logout()
                  closeNav()
                  history.push('/')
                }
              }}
            >
              Logout
            </Button>
          ) : (
            <Button
              className='drawer-Button'
              onClick={() => {
                closeNav()
                history.push('/login')
              }}
            >
              Login
            </Button>
          )}
        </Row>
      </div>
    </Container>
  )
}

export default MyAccount
