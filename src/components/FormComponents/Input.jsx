import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
const Input = (props) => {
  const { label, name, type, ...rest } = props
  const [showtext, setShowtext] = useState(false)
  const [iconShow, setIconShow] = useState(faEye)
  const showPassword = () => {
    setShowtext(!showtext)
    setIconShow(iconShow === faEye ? faEyeSlash : faEye)
  }
  return props.type === 'password' ? (
    <Form.Group className='form-groups'>
      <Form.Label className='form-labels' htmlFor={name}>
        {label}
      </Form.Label>
      <Form.Control
        name={name}
        className='form-inputs'
        type={showtext === true ? 'text' : 'password'}
        {...rest}
      />
      <FontAwesomeIcon
        icon={iconShow}
        className='toggle-password'
        onClick={showPassword}
      />
    </Form.Group>
  ) : (
    <Form.Group className='form-groups'>
      <Form.Label className='form-labels' htmlFor={name}>
        {label}
      </Form.Label>
      <Form.Control name={name} className='form-inputs' type={type} {...rest} />
    </Form.Group>
  )
}

export default Input
