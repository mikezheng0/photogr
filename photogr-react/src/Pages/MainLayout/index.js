import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import {
    Menu
} from '../../Layout'
import Header from './Header'
import { routes } from '../../Constants'


import HomePage from '../HomePage'
import PhotoDetailPage from '../PhotoDetailPage'
import UserDetailPage from '../UserDetailsPage'
import EventsPage from '../EventsPage'
import EventDetailPage from '../EventsDetailPage'
import { LinearLayout, FlexItem } from '../../Styles/index';

class MainLayout extends Component {
    render() {
        
        return (
        <main className="App">
          
          <Header />
          <LinearLayout>
            <FlexItem flex={1}>
              <Menu links={routes} url={this.props.match.url}/>
            </FlexItem>
            <FlexItem flex={5}>
              <Route path={`${this.props.match.url}home`} component={HomePage}/>
              <Route path={`${this.props.match.url}photo-detail/:photoId`} component={PhotoDetailPage}/>
              <Route path={`${this.props.match.url}myphotos/:userId`} component={UserDetailPage}/>
              <Route path={`${this.props.match.url}events`} component={EventsPage}/>
              <Route path={`${this.props.match.url}event-detail/:eventId`} component={EventDetailPage}/>
            </FlexItem>
          </LinearLayout>
        </main>
        )
    }
}

export default MainLayout