import React from 'react'

const Card = (props) => {
  return (
    <div className='news-card'>
      <div className='news-card-body'>{props.children}</div>
    </div>
  )
}

export default Card
