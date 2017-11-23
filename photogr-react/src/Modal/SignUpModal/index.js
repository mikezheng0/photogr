import React from 'react'
import BaseModal from '../Base';
import {TextInput, LinearLayout} from '../../Styles'


const SignUpModal = (props) => 
  <BaseModal {...props} show={props.state.isOpen}>
    <LinearLayout vertical>
      <h2>Sign Up</h2>
      <TextInput type="text" placeholder="Username"/>
      <TextInput type="password" placeholder="Password"/>
      <TextInput type="password" placeholder="Event Date"/>
    </LinearLayout>
  </BaseModal>


export default SignUpModal