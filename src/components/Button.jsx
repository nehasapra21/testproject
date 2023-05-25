import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonComponent = (props) => {
  const { text, variant, icon, ...rest } = props

  return (
    <Button {...rest} className={`common-btn ${variant ? variant : ''} `}>
      {text}
      {icon ? <span className='btn-icon'>{icon}</span> : null}
    </Button>
    // helo
  )
}

export default ButtonComponent
