import React from 'react'
import homescreen from '../assets/images/homescreen.png'

const HomeImage = () => {
  return (
    <div className='image-container'>
      <img
        src={homescreen}
        alt='image'
        style={{ width: '100%', height: '100%' }}
      ></img>
    </div>
  )
}

export default HomeImage
