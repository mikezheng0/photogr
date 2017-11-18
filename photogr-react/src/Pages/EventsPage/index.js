import React from 'react'
import Container from './container'
import {EventItem} from '../../Core'

const EventsComponent = ({events, onAdd, url}) => (
  <div>
      <div>Search: <input type="text" value="" placeholder="filter locations"/></div>
      {
        events.map(
          (event)=> 
            <EventItem 
              key={event.id} 
              {...event} 
              onAdd={onAdd}
              url= {url}/>
          )
      }
  </div>
)

const EventsPage = Container(EventsComponent)

export default EventsPage
