import React from "react";
import { LoginModal, withModal } from "../../../Modal";
import { Button } from "../../../Styles";

const LoginButton = ({openModal, handleLogin, ...rest}) => (
  <div>
    <Button onClick={openModal}>Login</Button>
    <LoginModal handleLogin={handleLogin} {...rest} />
  </div>
);

export default withModal(LoginButton);
