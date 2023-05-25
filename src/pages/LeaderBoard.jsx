import React, { useEffect, useState, useLayoutEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { getLeadboard } from '../API/LeaderBoardAPI'
import getMyAccountDetail from '../API/GetMyAccount'
import profileImg from '../assets/images/profile-img.png'
import { rankIcon, rewardIcon } from '../assets/svg'

import LeaderBoardList from '../components/Lists/LeaderBoardList'
import { BASE_URL } from '../constants'

const LeaderBoard = () => {
  const [data, setData] = useState([])
  const [accountdata, setAccountData] = useState([])

  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useLayoutEffect(() => {
    setWindowSize(window.innerWidth)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const resdata = await getLeadboard()
      setData([...resdata.data.data])
    }

    fetchData()
  }, [])
  useEffect(() => {
    const fetchData = async () => {
      const response = await getMyAccountDetail()
      setAccountData(response.data.data)
    }

    fetchData()
  }, [])
  return (
    <Container className='cont-top-margin'>
      <Row>
        <Col xs={12} md={7}>
          <div className='user-lead-info'>
            <h1 className='lead-head'>Leaderboard</h1>
            {windowSize < 552 ? (
              <div className='user-lead'>
                <div className='prof-img-mob'>
                  <img
                    src={
                      accountdata?.ProfileImage &&
                      accountdata.ProfileImage !== ''
                        ? `${BASE_URL}${accountdata.ProfileImage}`
                        : profileImg
                    }
                    alt=''
                  />
                </div>
                <div className='prof-lead-info-mob'>
                  <h2 className='user-name'>{accountdata.Name}</h2>
                  <Row className='leader-below leader-wrappper-below'>
                    <Col className=''>
                      <div className='rewards'>
                        <div className='icons'>
                          <span>{rewardIcon}</span>
                          <p className='points'>{accountdata.TotalPoint}</p>
                        </div>
                        <p>Reward Points</p>
                      </div>
                    </Col>

                    <Col style={{ borderLeft: '2px solid white' }}>
                      <div className='rewards'>
                        <div className='icons'>
                          <span>{rankIcon}</span>
                          <p className='points'>{accountdata.Ranking}</p>
                        </div>
                        <p>Ranking</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            ) : (
              <div className='user-lead'>
                <div className='prof'>
                  <img
                    src={
                      accountdata?.ProfileImage &&
                      accountdata.ProfileImage !== ''
                        ? `${BASE_URL}${accountdata.ProfileImage}`
                        : profileImg
                    }
                    alt=''
                  />
                  <h2 className='user-name'>{accountdata.Name}</h2>
                </div>
                <Row className='leader-below leader-wrappper-below'>
                  <Col className=''>
                    <div className='rewards'>
                      <div className='icons'>
                        <span>{rewardIcon}</span>
                        <p className='points'>{accountdata.TotalPoint}</p>
                      </div>
                      <p>Reward Points</p>
                    </div>
                  </Col>

                  <Col style={{ borderLeft: '2px solid white' }}>
                    <div className='rewards'>
                      <div className='icons'>
                        <span>{rankIcon}</span>
                        <p className='points'>{accountdata.Ranking}</p>
                      </div>
                      <p>Ranking</p>
                    </div>
                  </Col>
                </Row>
              </div>
            )}
          </div>
        </Col>
        <Col xs={12} md={5}>
          <div className='leads-heads'>
            <h2 className='head'>Rank</h2>
            <h2 className='head'>Reward Points</h2>
          </div>
          {data.map((item, index) => (
            <LeaderBoardList data={item} key={index} serialNo={index} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default LeaderBoard
