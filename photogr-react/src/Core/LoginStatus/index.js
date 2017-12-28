import React from "react";
import { LinearLayout, justifyEnd } from "../../Styles";
import SignUpButton from "../User/SignUpButton";
import LoginButton from "../User/LoginButton";
const EndJustifiedLinearLayout = justifyEnd(LinearLayout);

const LoginStatus = props => (
  <EndJustifiedLinearLayout>
    <SignUpButton />
    <LoginButton />
  </EndJustifiedLinearLayout>
);

export default LoginStatus;
