import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colours } from '../Constants'

export const StyledLink = styled(Link)`
  color: ${ colours.primary };
  font-weight: bold;
  text-decoration: none;
  margin: 1em;
  display:block;
  
`

export const StyledSpan = styled.span`
`
