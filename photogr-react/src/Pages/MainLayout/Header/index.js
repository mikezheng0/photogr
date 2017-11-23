import React from 'react'
import { SearchBar, LoginStatus } from '../../../Core'
import { LinearLayout, FlexItem } from '../../../Styles'
import HeaderContainer from './container'

const HeaderComponent =  ({handleSignUp, openModal}) => 
(
  <header>
    <LinearLayout spaceBetween>
      <FlexItem >
        <SearchBar></SearchBar>
      </FlexItem>
      <FlexItem >
        <LoginStatus handleSignUp={handleSignUp}>Login</LoginStatus>
      </FlexItem>
    </LinearLayout>
  </header>  
)

export default HeaderContainer(HeaderComponent)