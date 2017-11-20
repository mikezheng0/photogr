import React from 'react'
import { MenuItemStyle } from '../../Styles'

const StyledLink = MenuItemStyle.StyledLink

const StyledSpan = MenuItemStyle.StyledSpan

const MenuItem  = ({link, url}) => (
  <StyledLink to={`${url}${link.path}`}>
      <StyledSpan>{link.icon}</StyledSpan>
      {link.title}
  </StyledLink>
)
    

export default MenuItem