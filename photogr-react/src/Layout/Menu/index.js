import React, { Component } from 'react'
import {MenuItem} from '../../Core'
class Menu extends Component {
    render() {
        return (
            <nav>
                {this.props.links.map((route, index)=>(
                    <MenuItem url={this.props.url} key={index} link={route}></MenuItem>
                ))}
            </nav>  
        )
    }
}

export default Menu