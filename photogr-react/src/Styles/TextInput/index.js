import styled from 'styled-components'
import { colours } from '../Constants'

export const TextInput = styled.input`
    border-radius: 3px;
    padding: 0.25em 0.25em;
    margin: 0.25em 0;
    background: transparent;
    color: ${colours.primary};
    border: 2px solid ${colours.primary};
`