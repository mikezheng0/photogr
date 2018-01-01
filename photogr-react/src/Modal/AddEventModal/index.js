import React from 'react'
import BaseModal from '../Base';
import {Button, TextInput, LinearLayout, FlexItem} from '../../Styles'


const AddEventModal = ({isOpen, ...rest}) => (
  <BaseModal {...rest} show={isOpen}>
    <LinearLayout>
      <FlexItem>
        <div>
          <img src="" alt=""/>
        </div>
        <Button>Upload</Button>
      </FlexItem>
      <FlexItem>
      <LinearLayout vertical>
        <h4>Info</h4>
        <TextInput type="text" placeholder="Title"/>
        <TextInput type="text" placeholder="Description"/>
        <h4>Date and Time</h4>
        <TextInput type="text" placeholder="Event Date"/>
        <TextInput type="text" placeholder="Time"/>
        <h4>Location</h4>
        <TextInput type="text" placeholder="Address"/>
        <TextInput type="text" placeholder="Country"/>
        <TextInput type="text" placeholder="City"/>
        <TextInput type="text" placeholder="ZipCode"/>
        <TextInput type="text" placeholder="State "/>
        </LinearLayout>
      </FlexItem>
    </LinearLayout>
  </BaseModal>
)

export default AddEventModal