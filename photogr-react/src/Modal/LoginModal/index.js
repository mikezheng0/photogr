import React from "react";
import BaseModal from "../Base";
import { TextInput, LinearLayout, Button, FlexItem } from "../../Styles";

const LoginModal = ({ state, ...rest }) => (
  <BaseModal {...rest} show={state.isOpen}>
    <LinearLayout vertical>
      <h2>Login</h2>
      <TextInput type="text" placeholder="Login" />
      <TextInput type="password" placeholder="Password" />
      <FlexItem>
        <Button>Login</Button>
      </FlexItem>
    </LinearLayout>
  </BaseModal>
);

export default LoginModal;
