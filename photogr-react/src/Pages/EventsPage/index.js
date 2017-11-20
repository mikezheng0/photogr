import React from 'react'
import Container from './container'
import {withModal} from  '../../Modal'
import {EventItem} from '../../Core'
import {AddEventModal} from '../../Modal'
import {Button} from '../../Styles'

const EventsComponent = ({events, onAdd, url, openModal, state, handleBodyClick, handleOverlayClick}) => (
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
      <Button onClick={openModal}>
        Add Event
      </Button>

      <AddEventModal show={state.isOpen} handleOverlayClick={handleOverlayClick} handleBodyClick={handleBodyClick}>
      </AddEventModal>
  </div>
)

const EventsPage = Container(withModal(EventsComponent))

export default EventsPage
