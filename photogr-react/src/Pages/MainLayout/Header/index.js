import React from "react";
import { SearchBar, LoginStatus } from "../../../Core";
import { LinearLayout, FlexItem } from "../../../Styles";
import HeaderContainer from "./container";

const HeaderComponent = ({
  isLoggedIn,
  handleSignUp,
  openModal,
  handleLogin
}) => (
  <header>
    <LinearLayout spaceBetween>
      <FlexItem>
        <SearchBar />
      </FlexItem>
      <FlexItem>
        {isLoggedIn ? (
          <div>logged in</div>
        ) : (
          <LoginStatus handleSignUp={handleSignUp} handleLogin={handleLogin}>
            Login
          </LoginStatus>
        )}
      </FlexItem>
    </LinearLayout>
  </header>
);

export default HeaderContainer(HeaderComponent);
