import React from "react";
import Container from "./container";
import { PhotoList, CommentTree } from "../../Core";

const EventDetailComponent = ({
  event
}) => (
  <div>
    
    <h1>{event.title}</h1>
    <h3>{event.description}</h3>
    <div>
      <h4>Location</h4>
     {event.location && <div>
        <div>Street Address: {event.location.streetAddress}</div>
        <div>Postal Code: {event.location.postalCode}</div>
        <div>City: {event.location.city}</div>
        <div>Province: {event.location.state}</div>
        <div>Country: {event.location.country}</div>
      </div>}
      <div>
        Created: <span>{event.created}</span>
      </div>
      <div>
        Event Date: <span>{event.eventDate}</span>
      </div>
    </div>
    {event.photos && <PhotoList photos={event.photos} url="photo-details" />}
    {event.comment && <CommentTree comments={event.comments} />}
  </div>
);

export default Container(EventDetailComponent);
