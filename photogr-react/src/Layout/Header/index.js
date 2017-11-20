import React, { Component } from 'react'
import { SearchBar, LoginStatus } from '../../Core'
import {LinearLayout, FlexItem } from '../../Styles'

class Header extends Component {
    render() {
        return (
            <header>
              <LinearLayout spaceBetween>
                <FlexItem >
                  <SearchBar></SearchBar>
                </FlexItem>
                <FlexItem >
                  <LoginStatus>Login</LoginStatus>
                </FlexItem>
              </LinearLayout>
            </header>  
        )
    }
}

export default Header