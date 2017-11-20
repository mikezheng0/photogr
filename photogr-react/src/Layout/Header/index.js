import React, { Component } from 'react'
import { SearchBar, LoginStatus } from '../../Core'

class Header extends Component {
    render() {
        return (
            <header>
                <SearchBar></SearchBar>
                <LoginStatus>Login</LoginStatus>
            </header>  
        )
    }
}

export default Header