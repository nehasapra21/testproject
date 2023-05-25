import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import handpointer from '../../assets/images/ic_hand_point.png'
import { Col, Container, Row } from 'react-bootstrap'
import pointerImg from '../../assets/images/ic_hand_point.png'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
const ViewAnswerList = ({ data, serialNo }) => {
  const history = useHistory()
  return (
    <li>
      <Row>
        <Col xs={2} md={1} lg={1}>
          <span className='q-counter'>{serialNo + 1}</span>
        </Col>
        <Col xs={10} md={9} lg={9}>
          <p className='q-text'>{data.Title}</p>
        </Col>
        <Col xs={12} md={2} lg={2}>
          <p className='q-text time-taken'>Time Taken: {data.TimeTaken}</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <div className='pointer-img-ans'>
            <span>
              <img src={pointerImg} className='pointer-img-answer' />
            </span>

            <span className='actual-answer'> {data.Answer}</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={12} className='answer-source'>
          <span>Source:</span>
          <a target='_blank' className='answer-source-link' href={data.Link}>
            {data.Link}
          </a>
        </Col>
      </Row>
      <Row>
        <Col xs={2} md={9} lg={9}></Col>

        <Col xs={10} md={3} lg={3}>
          <p className='history-answer-status'>
            <span className='q-text'>Your Answer:</span>
            <span className='answer'>
              {data.UserAnwser === 0
                ? 'No'
                : data.UserAnwser === 1
                ? 'Yes'
                : data.UserAnwser === 2
                ? 'I havent came accross'
                : 'Skippped'}
            </span>
          </p>
        </Col>
      </Row>
    </li>
  )
}

export default ViewAnswerList
