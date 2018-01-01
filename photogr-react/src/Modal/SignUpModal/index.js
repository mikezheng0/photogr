import React from "react";
import BaseModal from "../Base";
import { TextInput, LinearLayout, FlexItem, Button } from "../../Styles";

const SignUpModal = ({ isOpen, handleSignUp, ...rest }) => (
  <BaseModal {...rest} show={isOpen}>
    <LinearLayout vertical>
      <form onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        <TextInput name="username" type="text" placeholder="Username" />
        <TextInput name="password" type="password" placeholder="Password" />
        <TextInput name="confirmPassword" type="password" placeholder="Confirm Password" />
        <FlexItem>
          <Button type="submit">Sign Up</Button>
        </FlexItem>
      </form>
    </LinearLayout>
  </BaseModal>
);

export default SignUpModal;
