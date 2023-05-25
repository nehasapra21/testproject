import React from 'react'
import logo from '../../assets/images/LOGO-YELLOW.png'

const AppLoader = () => {
  return (
    <div className='app-fallback-div'>
      <img src={logo} className='loader-img' alt='loader' />
    </div>
  )
}

export default AppLoader
