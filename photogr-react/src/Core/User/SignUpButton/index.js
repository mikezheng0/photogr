import React from "react";
import { SignUpModal, withModal } from "../../../Modal";
import { Button } from "../../../Styles";

const SignUpButton = ({openModal, ...props}) => (
  <div>
    <Button onClick={openModal}>Sign Up</Button>
    <SignUpModal {...props} />
  </div>
);

export default withModal(SignUpButton);
