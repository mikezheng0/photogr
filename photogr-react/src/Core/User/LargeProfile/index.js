import React from 'react'
import { LinearLayout, FlexItem, Button, LargeProfileImage } from '../../../Styles'

const LargeProfile = ({user}) => 
<LinearLayout>
  <FlexItem>
    <LargeProfileImage src={user.profilePhoto} alt={user.name}/>
  </FlexItem>
  <FlexItem>
    <h2>{user.name}</h2>
    <div>
        <span>Followers: {user.followers} </span>
        <span>Following: {user.following} </span>
        <span>Rating: {user.rating}</span>
    </div>
    <h4>Contact Information</h4>
    <div>
        <div>Street Address: {user.contactInformation.streetAddress}</div>
        <div>Postal Code: {user.contactInformation.postalCode}</div>
        <div>City: {user.contactInformation.city}</div>
        <div>Province: {user.contactInformation.state}</div>
        <div>Country: {user.contactInformation.country}</div>
    </div>
  </FlexItem>
</LinearLayout>

export default LargeProfile