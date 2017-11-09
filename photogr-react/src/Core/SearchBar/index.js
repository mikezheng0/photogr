import React from 'react'
import { Button, TextInput } from '../../Styles'

const SearchBar = () => (
    <span>
        <TextInput placeholder="Search" type="text" /> 
        <Button primary>Search</Button>
    </span>
)

export default SearchBar