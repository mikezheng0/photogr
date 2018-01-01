import React from "react";
import { SearchBar, LoginStatus } from "../../../Core";
import { LinearLayout, FlexItem } from "../../../Styles";
import HeaderContainer from "./container";

const HeaderComponent = ({
  isLoggedIn,
  handleSignUp,
  handleLogout,
  handleLogin,
  openModal
}) => (
  <header>
    <LinearLayout spaceBetween>
      <FlexItem>
        <SearchBar />
      </FlexItem>
      <FlexItem>
        <LoginStatus
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
          handleSignUp={handleSignUp}
          handleLogin={handleLogin}
        />
      </FlexItem>
    </LinearLayout>
  </header>
);

export default HeaderContainer(HeaderComponent);
