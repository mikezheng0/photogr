import React from "react";
import { LinearLayout, justifyEnd } from "../../Styles";
import SignUpButton from "../User/SignUpButton";
import LoginButton from "../User/LoginButton";
const EndJustifiedLinearLayout = justifyEnd(LinearLayout);

const LoginStatus = ({handleLogin, handleSignUp}) => (
  <EndJustifiedLinearLayout>
    <SignUpButton handleSignUp={handleSignUp}/>
    <LoginButton handleLogin={handleLogin}/>
  </EndJustifiedLinearLayout>
);

export default LoginStatus;
