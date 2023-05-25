import React, { useEffect, useState } from 'react'

const ImageCheckbox = (props) => {
  const { img, label, value, ...rest } = props

  return (
    <>
      <input
        type='checkbox'
        name={label}
        id={`myCheckbox${value}`}
        {...rest}
        value={value}
      />
      <label htmlFor={`myCheckbox${value}`} className='img-check-label'>
        <img src={img} alt='cat-img' />
      </label>
    </>
  )
}

export default ImageCheckbox
