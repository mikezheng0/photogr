import React from 'react'
import Container from './container'
import {withModal} from  '../../Modal'
import {EventItem} from '../../Core'
import {AddEventModal} from '../../Modal'
import {Button, LinearLayout, FlexItem, alignRight, TextInput} from '../../Styles'

const RightAlignedFlexItem = alignRight(FlexItem)

const EventsComponent = ({events, onAdd, url, openModal, state, handleBodyClick, handleOverlayClick}) => (
  <div>
      <LinearLayout>
        <FlexItem>
          Search: <TextInput type="text"  placeholder="filter locations"/>
        </FlexItem>
        <RightAlignedFlexItem>
          <Button onClick={openModal}>
            Add Event
          </Button>
        </RightAlignedFlexItem>
      </LinearLayout>
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
      <AddEventModal show={state.isOpen} handleOverlayClick={handleOverlayClick} handleBodyClick={handleBodyClick}/>
  </div>
)

const EventsPage = Container(withModal(EventsComponent))

export default EventsPage
