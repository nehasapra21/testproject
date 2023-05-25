import React from 'react'

import Input from './Input'
import ImageCheckbox from './ImageCheckbox'

const FormComponents = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'img-check':
      return <ImageCheckbox {...rest} />
    default:
      throw new Error()
  }
}

export default FormComponents
