import React from 'react'
import { SignUpModal, withModal } from '../../../Modal'
import {Button} from '../../../Styles'

const SignUpButton = (props) =>
  <div>
    <Button onClick={props.openModal}>Sign Up</Button>
    <SignUpModal {...props}/>
  </div>

export default withModal(SignUpButton)