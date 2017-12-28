import React from 'react'
import { LinearLayout, Badge, justifyStart } from '../../../Styles';

const JustifyStartLinearLayout = justifyStart(LinearLayout)
const AuthorTile = ({user}) =>
  <JustifyStartLinearLayout centerAlign>
    <img src={user.img.path} alt={user.name}/>
    <h3>{user.name}</h3>
    <Badge>{user.type}</Badge>
  </JustifyStartLinearLayout>

export default AuthorTile