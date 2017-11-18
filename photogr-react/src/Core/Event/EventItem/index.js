import React from 'react'
import {Link} from 'react-router-dom'

const EventItem = ({path, title, onAdd, url, id}) => (
  <div>
    <div>
      <Link to={`${url}/${id}`}>
        <img src={path} alt={title}/>
      </Link>
    </div>
    <div>
      <span>{title}</span>
      <button onClick={onAdd()}>
        Add
      </button>
    </div>
  </div>
)

export default EventItem