import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '../../../Styles'
const EventItem = ({path, title, onAdd, url, id}) => (
  <div>
    <div>
      <Link to={`${url}/${id}`}>
        <img src={path} alt={title}/>
      </Link>
    </div>
    <div>
      <span>{title}</span>
      <Button onClick={onAdd}>
        Join
      </Button>
    </div>
  </div>
)

export default EventItem