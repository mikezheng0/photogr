import React from 'react'
import Container from './container'
import {PhotoList} from '../../Core'
import { LinearLayout, FlexItem } from '../../Styles'

const UserDetailsComponent = ({url, user, onClickPhoto}) => (
    <LinearLayout vertical>
        <LinearLayout>
          <FlexItem>
            <img src={user.profilePhoto} alt={user.name}/>
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
        
        <PhotoList
          photos={user.photos}
          url={url}
          onClick={onClickPhoto}>
        </PhotoList>
        
    </LinearLayout>
)

export default Container(UserDetailsComponent)