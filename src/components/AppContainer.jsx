import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const AppWrapper = (props) => {
  return (
    <Container>
      <Row>
        <Col lg={4} xs={12} md={2}></Col>
        <Col lg={4} xs={12} md={8} className='App-wrapper'>
          {props.children}
        </Col>
        <Col lg={4} xs={12} md={2}></Col>
      </Row>
    </Container>
  )
}

export default AppWrapper
