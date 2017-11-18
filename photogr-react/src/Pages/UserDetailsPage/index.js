import React from 'react'
import Container from './container'
import {PhotoList} from '../../Core'
const UserDetailsComponent = ({url, user, onClickPhoto}) => (
    <div>
        <h2>{user.name}</h2>
        <img src={user.profilePhoto} alt={user.name}/>
        <div>
            <span>Followers: {user.followers}</span>
            <span>Following: {user.following}</span>
            <span>Rating: {user.rating}</span>
        </div>
        <div>
            <h4>Contact Information</h4>
            <div>
                <div>Street Address: {user.contactInformation.streetAddress}</div>
                <div>Postal Code: {user.contactInformation.postalCode}</div>
                <div>City: {user.contactInformation.city}</div>
                <div>Province: {user.contactInformation.state}</div>
                <div>Country: {user.contactInformation.country}</div>
            </div>
        </div>
        <PhotoList
            photos={user.photos}
            url={url}
            onClick={onClickPhoto}>
        </PhotoList>
    </div>
)

export default Container(UserDetailsComponent)