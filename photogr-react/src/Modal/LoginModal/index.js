import React from "react";
import BaseModal from "../Base";
import { TextInput, LinearLayout, Button, FlexItem } from "../../Styles";

const LoginModal = ({ isOpen, handleLogin, ...rest }) => (
  <BaseModal {...rest} show={isOpen}>
    <LinearLayout vertical>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <TextInput
          name="username"
          type="text"
          placeholder="Login"
        />
        <TextInput
          name="password"
          type="password"
          placeholder="Password"
        />
        <FlexItem>
          <Button type="submit">Login</Button>
        </FlexItem>
      </form>
    </LinearLayout>
  </BaseModal>
);

export default LoginModal;
