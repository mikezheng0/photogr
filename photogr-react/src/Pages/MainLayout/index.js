import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import {
    Header,
    Menu
} from '../../Layout'
import { routes } from '../../Constants'
import HomePage from '../HomePage'
import PhotoDetailPage from '../PhotoDetailPage'

class MainLayout extends Component {
    render() {
        
        return (
        <div className="App">
            <Header />
            <Menu links={routes} url={this.props.match.url}/>

            <Route path={`${this.props.match.url}home`} component={HomePage}/>
            <Route path={`${this.props.match.url}photo-detail/:photoId`} component={PhotoDetailPage}/>
        </div>
        )
    }
}

export default MainLayout