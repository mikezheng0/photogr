import React from 'react'
import Container from './container'
import {PhotoList, CommentTree} from '../../Core'

const EventDetailComponent = ({title, description, location, created, eventDate, photos, comments}) => (
  <div>
    <h1>{title}</h1>
    <h3>{description}</h3>
    <div>
      <h4>Location</h4>
      <div>
        <div>Street Address: {location.streetAddress}</div>
        <div>Postal Code: {location.posrtalCode}</div>
        <div>City: {location.city}</div>
        <div>Province: {location.state}</div>
        <div>Country: {location.country}</div>
      </div>
      <div>
        Created: <span>{created.toString()}</span>
      </div>
      <div>
        Event Date: <span>{eventDate.toString()}</span>
      </div>
    </div>
    <PhotoList photos={photos} url="photo-details"/>
    <CommentTree comments={comments} />
  </div>
)

export default Container(EventDetailComponent)
