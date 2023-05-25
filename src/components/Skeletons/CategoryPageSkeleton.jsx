import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'

const CategoryPageSkeleton = () => {
  const skelArray = []

  for (let i = 1; i <= 6; i++) {
    skelArray.push(
      <Col xs={12} md={6}>
        <div className='cat-card'>
          <div className='cat-card-body'>
            <div className='image-wrapper'>
              <Skeleton className='cat-body-skel' />
            </div>
            <div className='cat-card-content'>
              <div className='info-sec'>
                <div>
                  <Skeleton className='cat-para-skel' count={2} />
                </div>
              </div>
            </div>
          </div>
          <div className='cat-footer'>
            <Skeleton className='cat-para-skel' count={2} />
          </div>
        </div>
      </Col>
    )
  }

  return (
    <Row style={{ margin: '0' }} className='cat-ques-row'>
      {skelArray}
    </Row>
  )
}

export default CategoryPageSkeleton
