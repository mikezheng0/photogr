import React from 'react'
import BaseModal from '../Base';
import {TextInput, LinearLayout} from '../../Styles'


const SignUpModal = ({state, ...rest}) => 
  <BaseModal {...rest} show={state.isOpen}>
    <LinearLayout vertical>
      <h2>Sign Up</h2>
      <TextInput type="text" placeholder="Username"/>
      <TextInput type="password" placeholder="Password"/>
      <TextInput type="password" placeholder="Event Date"/>
    </LinearLayout>
  </BaseModal>


export default SignUpModal