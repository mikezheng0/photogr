import React from "react";
import { LinearLayout, justifyEnd } from "../../Styles";
import SignUpButton from "../User/SignUpButton";
import LoginButton from "../User/LoginButton";
import LogoutButton from "../User/LogoutButton"

const EndJustifiedLinearLayout = justifyEnd(LinearLayout);

const LoginStatus = ({handleLogin, handleSignUp, handleLogout, isLoggedIn}) => (
  <EndJustifiedLinearLayout>
    {!isLoggedIn && <SignUpButton handleSignUp={handleSignUp}/>}
    {!isLoggedIn && <LoginButton handleLogin={handleLogin}/>}
    {isLoggedIn && <LogoutButton handleLogout={handleLogout}></LogoutButton>}
  </EndJustifiedLinearLayout>
);

export default LoginStatus;
