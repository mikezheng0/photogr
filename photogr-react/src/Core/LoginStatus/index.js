import React from 'react'
import { Button } from '../../Styles'
import {LinearLayout, FlexItem, justifyEnd } from '../../Styles'

const EndJustifiedLinearLayout = justifyEnd(LinearLayout)

const LoginStatus = () => (
  <EndJustifiedLinearLayout>
      <Button>Login</Button>
  </EndJustifiedLinearLayout>
)
    

export default LoginStatus