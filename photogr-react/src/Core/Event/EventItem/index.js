import React from 'react'
import {Link} from 'react-router-dom'
import {Button,Card} from '../../../Styles'
import { LinearLayout } from '../../../Styles/Layout/index';
const EventItem = ({path, title, onAdd, url, id}) => (
  <Card>
    <div>
      <Link to={`${url}/${id}`}>
        <img src={path} alt={title}/>
      </Link>
    </div>
    <LinearLayout centerAlign>
      <span>{title}</span>
      <Button onClick={onAdd}>
        Join
      </Button>
    </LinearLayout>
  </Card>
)

export default EventItem