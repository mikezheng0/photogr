import React from 'react'
import Container from './container'
import {PhotoList, LargeProfile} from '../../Core'
import { AddPhotoModal, withModal } from '../../Modal'
import { LinearLayout, FlexItem, Button } from '../../Styles'

const UserDetailsComponent = ({url, user, onClickPhoto, state, handleBodyClick, handleOverlayClick, openModal}) => (
    <LinearLayout vertical>
        {user.contactInformation && <LargeProfile user={user}/>}
         
        <FlexItem>
          <Button onClick={openModal}>New Photo</Button>
        </FlexItem>
        <AddPhotoModal state={state} handleOverlayClick={handleOverlayClick} handleBodyClick={handleBodyClick}/>
        {user.photos && <PhotoList
          photos={user.photos}
          url={url}
          onClick={onClickPhoto}>
        </PhotoList>}
        
    </LinearLayout>
)

export default Container(withModal(UserDetailsComponent))