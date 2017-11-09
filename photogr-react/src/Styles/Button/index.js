import styled, { css } from 'styled-components'
import { colours } from '../Constants'

export const Button = styled.button`
    border-radius: 3px;
    padding: 0.25em 1em;
    margin: 0 1em;
    background: transparent;
    color: ${colours.primary};
    border: 2px solid  ${colours.primary};

    ${props => props.primary && css`
        background: ${colours.primary};
        color: white;
    `}
`


  