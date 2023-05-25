import React, { useLayoutEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'

const CategorySelectSkeleton = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useLayoutEffect(() => {
    setWindowSize(window.innerWidth)
  }, [window.innerWidth])

  const skelArray = []

  let uptoNum = 24

  if (windowSize < 552) {
    uptoNum = 12
  } else {
    uptoNum = 24
  }

  for (let i = 1; i <= uptoNum; i++) {
    skelArray.push(
      <Col xs={4} sm={3} md={3} lg={2} key={i}>
        <div className='cat-select-skel-div'>
          <Skeleton className='cat-select-skel-img' />
          <Skeleton className='cat-select-skel-para' />
        </div>
      </Col>
    )
  }

  return <Row className='select-cat-box'>{skelArray}</Row>
}

export default CategorySelectSkeleton
