import React, { Component } from 'react'
import { SearchBar, LoginStatus } from '../../Core'

class Header extends Component {
    render() {
        return (
            <div>
                <SearchBar></SearchBar>
                <LoginStatus>Login</LoginStatus>
            </div>  
        )
    }
}

export default Header