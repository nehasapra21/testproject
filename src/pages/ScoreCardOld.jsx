import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import congoImg from '../assets/images/congo-img.png'
import clickHere from '../assets/images/animated_arraow.gif'
import { instaIcon, facebook, twitterIcon, clickIndicator } from '../assets/svg'
import ButtonComponent from '../components/Button'
import { updateToEnrollUser } from '../API/ProfileAPI'
import { toast } from 'react-toastify'

import { useSelector, useDispatch } from 'react-redux'
import { login } from '../redux/loginLogout'

const ScoreCard = (props) => {
  const [score, setScore] = useState({})

  const { data } = useSelector((state) => state.loginLogout)
  const dispatch = useDispatch()

  useEffect(() => {
    if (props?.location?.state?.scoreData) {
      const { scoreData } = props.location.state
      setScore({ ...scoreData })
    } else {
      toast.error('Please play a quiz.')
    }
  }, [])

  const ClikcupdateToEnrollUser = () => {
    const fetchData = async () => {
      const resdata = await updateToEnrollUser()

      dispatch(login(resdata))
    }

    fetchData()
  }
  document.querySelector(
    'meta[property="og:description"]'
  ).content = `In political quiz category, I have scored ${score.totalPoints} points.Can you beat me?`

  return (
    <Container className='cont-top-margin'>
      <div className='score-card'>
        <div className='upper'>
          <img src={congoImg} alt='congo-img' />
          <h2 className='score-head'>Better Luck Next Time</h2>
          <h2 className='score-subhead'>You have Scored</h2>
          <div className='circle'>
            <h6 className='score'>{score?.correctAnswer || 0}</h6>
            <p>
              Out of <span>{score?.noOfQues || ''}</span>
            </p>
          </div>

          <div className='score-info'>
            You have scored{' '}
            <span className='big-txt'>{score?.totalPoints || 0}</span> Points
          </div>
          <p className='share-txt'>Share your Score on Social Media</p>
          <div className='share-score-social'>
            <Button className='social-share-btn'>{instaIcon}</Button>

            <Link
              className='social-share-btn'
              to={{
                pathname:
                  'https://www.facebook.com/sharer.php?u=https://sanjaybhatia.esahyogi.com'
              }}
              target='_blank'
            >
              {facebook}
            </Link>
            <Link
              className='social-share-btn'
              to={{
                pathname:
                  'https://twitter.com/share?url=https://sanjaybhatia.esahyogi.com&text=I am playing news fackcheck game &hashtags=fakenewsornot'
              }}
              target='_blank'
            >
              {twitterIcon}
            </Link>
          </div>
        </div>
        <div className='lower'>
          <div
            className={
              data?.IsEnroll === false ? 'enroll-div' : 'enroll-div-center'
            }
          >
            {data?.IsEnroll === false ? (
              <div className='enroll'>
                <ButtonComponent
                  text='Sign Up'
                  variant='purple enrol-btn'
                  onClick={ClikcupdateToEnrollUser}
                />
                <p className='enroll-txt'>
                  Do you want signup for fact checking workshop?
                </p>
              </div>
            ) : (
              ''
            )}
            <ButtonComponent
              text='Play Again'
              variant='purple enrol-btn width-small'
              onClick={() => props.history.push('/categories')}
            />
          </div>
          <div className='view-answer'>
            <img src={clickHere} alt='click-here' />
            <Link
              className='click-here'
              onClick={() => props.history.push(`/view-answer/${score.playId}`)}
            >
              Click Here!
            </Link>
            <p className='click-txt'>To view your answers</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ScoreCard
