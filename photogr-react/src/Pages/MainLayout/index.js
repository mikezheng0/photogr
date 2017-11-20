import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import {
    Header,
    Menu
} from '../../Layout'
import { routes } from '../../Constants'
import HomePage from '../HomePage'
import PhotoDetailPage from '../PhotoDetailPage'
import UserDetailPage from '../UserDetailsPage'
import EventsPage from '../EventsPage'
import EventDetailPage from '../EventsDetailPage'

class MainLayout extends Component {
    render() {
        
        return (
        <main className="App">
            <Header />
            <Menu links={routes} url={this.props.match.url}/>

            <Route path={`${this.props.match.url}home`} component={HomePage}/>
            <Route path={`${this.props.match.url}photo-detail/:photoId`} component={PhotoDetailPage}/>
            <Route path={`${this.props.match.url}myphotos/:userId`} component={UserDetailPage}/>
            <Route path={`${this.props.match.url}events`} component={EventsPage}/>
            <Route path={`${this.props.match.url}event-detail/:eventId`} component={EventDetailPage}/>
        </main>
        )
    }
}

export default MainLayout