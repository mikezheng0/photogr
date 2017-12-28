import React from "react";
import { LoginModal, withModal } from "../../../Modal";
import { Button } from "../../../Styles";

const LoginButton = ({openModal, ...props}) => (
  <div>
    <Button onClick={openModal}>Login</Button>
    <LoginModal {...props} />
  </div>
);

export default withModal(LoginButton);
