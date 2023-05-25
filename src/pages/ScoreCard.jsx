import React, { useEffect, useState } from 'react'
import { Button, Row, Col, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { instaIcon, facebook, twitterIcon } from '../assets/svg'
import { updateToEnrollUser } from '../API/ProfileAPI'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { setUpdateData } from '../redux/loginLogout'
import AppWrapper from '../components/AppContainer'
import Pdf from 'react-to-pdf'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCirclePlay,
  faDownload,
  faEye,
  faShare
} from '@fortawesome/free-solid-svg-icons'
import certImage from '../assets/images/Certificates.jpg'

const ref = React.createRef()

const ScoreCard = (props) => {
  const [score, setScore] = useState({})
  const [smShow, setSmShow] = useState(false)
  const { data } = useSelector((state) => {
    return state.loginLogout
  })
  const dispatch = useDispatch()

  const options = {
    orientation: 'landscape',
    unit: 'in',
    format: 'A4'
  }
  useEffect(() => {
    if (props?.location?.state?.scoreData) {
      const { scoreData } = props.location.state
      setScore({ ...scoreData })
    } else {
      toast.error('Please play a quiz.')
    }
  }, [props?.location?.state])

  const ClikcupdateToEnrollUser = () => {
    const fetchData = async () => {
      try {
        const resdata = await updateToEnrollUser()
        dispatch(setUpdateData(resdata.data))
        toast.success('Successfully Enrolled')
      } catch (err) {
        toast.error('Unable to enroll.')
      }
    }
    fetchData()
  }
  document.querySelector(
    'meta[property="og:description"]'
  ).content = `In political quiz category, I have scored ${score.totalPoints} points.Can you beat me?`

  return (
    <>
      <AppWrapper>
        <Row>
          {score?.totalPoints === 0 ? (
            <Col xs={12}>
              <h2 className='congraheading fail'>
                Sorry!!
                <br />
                Your Final Score is 0
              </h2>
              <hr className='score-card-line' />
              <h4 className='sorry-txt'>Play again to increase your FCQ.</h4>
              <h4 className='sorry-txt'>
                Enroll in our workshop and learn how to debunk Fake News
              </h4>
            </Col>
          ) : (
            <>
              <Col lg={12} md={12} xs={12}>
                <h2 className='congraheading'>Congratulations !</h2>
                <p className='youhave'>
                  You Answered {score?.correctAnswer || 0}/
                  {score?.noOfQues || ''} question correctly!
                </p>
              </Col>
              <Col lg={12} md={12} xs={12} ref={ref}>
                <div className='img-wrapper'>
                  <img src={certImage} alt='certificate' />
                  <p>{data.Name}</p>
                </div>
              </Col>
            </>
          )}
        </Row>
        <Row className='bottom-row'>
          <Col lg={12} md={12} xs={12}>
            <p className='youhave-bttom'>You Have Earned</p>
            <p className='youhave-bttom'>
              <strong className='point-count'>{score?.totalPoints || 0}</strong>{' '}
              Points
            </p>
            {score?.totalPoints !== 0 ? (
              <p className='youhave-bttom'>
                <strong> Share your certificate with your friends</strong>
              </p>
            ) : null}
          </Col>

          {score?.totalPoints !== 0 ? (
            <>
              <Col lg={6} md={6} xs={6}>
                <button
                  className='ans-button bg-blue'
                  onClick={() => setSmShow(true)}
                >
                  <FontAwesomeIcon icon={faShare} /> SHARE
                </button>
              </Col>
              <Col lg={6} md={6} xs={6}>
                <Pdf
                  targetRef={ref}
                  filename={score.playId}
                  options={options}
                  scale={2.6}
                  y={0.2}
                >
                  {({ toPdf }) => (
                    <button className='ans-button bg-blue2' onClick={toPdf}>
                      <FontAwesomeIcon icon={faDownload} /> DOWNLOAD
                    </button>
                  )}
                </Pdf>
              </Col>
            </>
          ) : null}

          <Col xs={score?.totalPoints !== 0 ? 6 : 12}>
            <button
              className='ans-button bg-blue'
              onClick={() => props.history.push('/categories')}
            >
              <FontAwesomeIcon icon={faCirclePlay} /> Play Again
            </button>
          </Col>
          {score?.totalPoints !== 0 ? (
            <Col xs={6}>
              <button
                className='ans-button bg-blue2'
                onClick={() => {
                  props.history.push(`/view-answer/${score.playId}`)
                }}
              >
                <FontAwesomeIcon icon={faEye} /> View Answer
              </button>
            </Col>
          ) : null}

          {data?.IsEnroll !== true ? (
            <Col xs={score?.totalPoints !== 0 ? 6 : 12}>
              <button
                className='ans-button'
                onClick={ClikcupdateToEnrollUser}
                style={{
                  width: '100%',
                  fontFamily: 'Avenir',
                  marginBottom: '15px'
                }}
              >
                Enroll In Workshop
              </button>
            </Col>
          ) : (
            ''
          )}
        </Row>
      </AppWrapper>
      <Modal
        size='sm'
        show={smShow}
        onHide={() => setSmShow(false)}
        centered={true}
        aria-labelledby='example-modal-sizes-title-sm'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-modal-sizes-title-sm'>
            Social Share
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ScoreCard
