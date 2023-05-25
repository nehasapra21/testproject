import React, { useEffect } from 'react'
import { Container, Row, Col, Form, ButtonGroup } from 'react-bootstrap'

import FormComponents from '../components/FormComponents'
import Card from '../components/Cards/Card'
import ButtonComponent from '../components/Button'

import registerImg from '../assets/images/register.png'

const CompleteInfoComponent = (props) => {
  const { submitResponse, handleChange, data, handleGenderChange } = props
  const { Age, PhoneNo, Gender } = data

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [data])

  return (
    <Container className='cont-top-margin  complete-info-container'>
      <Row>
        <Col className='login-img complete-info-image' xs={12} md={7}>
          <img src={registerImg} alt='login-img' />
        </Col>
        <Col className='login-form' xs={12} md={5}>
          <Card>
            <h1 className='complete-prof-head'>Complete your profile</h1>
            <Form onSubmit={submitResponse} autoComplete={false}>
              <FormComponents
                type='text'
                value={PhoneNo}
                onChange={(e) => {
                  if (PhoneNo.toString().length <= 10) {
                    handleChange(e)
                  }
                }}
                name='PhoneNo'
                label='PHONE NUMBER'
                control='input'
                placeholder='+91'
                required='required'
              />

              <FormComponents
                type='number'
                value={Age}
                onChange={handleChange}
                name='Age'
                label='AGE'
                control='input'
                required='required'
                placeholder='Age'
              />

              <ButtonGroup aria-label='Basic example' className='gender-btns'>
                <ButtonComponent
                  variant='group-btn'
                  onClick={() => handleGenderChange('Male')}
                  name='Gender'
                  id={`${Gender === 'Male' ? 'active' : ''}`}
                  text='Male '
                ></ButtonComponent>
                <ButtonComponent
                  variant='group-btn'
                  onClick={() => handleGenderChange('Female')}
                  name='Gender'
                  id={`${Gender === 'Female' ? 'active' : ''}`}
                  text='Female'
                ></ButtonComponent>
                <ButtonComponent
                  variant='group-btn'
                  onClick={() => handleGenderChange('Other')}
                  name='Gender'
                  id={`${Gender === 'Other' ? 'active' : ''}`}
                  text='Other'
                ></ButtonComponent>
              </ButtonGroup>
              <ButtonComponent
                variant='purple'
                text='Next'
                type='submit'
                style={{
                  display: 'block',
                  margin: '0 auto',
                  width: '80%'
                }}
              />
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default CompleteInfoComponent
