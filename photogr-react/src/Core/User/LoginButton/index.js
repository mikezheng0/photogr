import React from 'react'
import { Button } from '../../../Styles'
import { LoginModal, withModal } from '../../../Modal'

const LoginButton = (props) =>
  <div>
    <Button onClick={props.openModal}>Login</Button>
    <LoginModal {...props} />
  </div>

export default withModal(LoginButton)