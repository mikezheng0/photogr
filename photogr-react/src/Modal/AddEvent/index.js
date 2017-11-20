import React from 'react'
import BaseModal from '../Base';
import {Button, TextInput, LinearLayout, FlexColumn} from '../../Styles'


const AddEventModal = (props) => (
  <BaseModal {...props}>
    <LinearLayout>
      <FlexColumn>
        <div>
          <img src="" alt=""/>
        </div>
        <Button>Upload</Button>
      </FlexColumn>
      <FlexColumn>
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
      </FlexColumn>
    </LinearLayout>
  </BaseModal>
)

export default AddEventModal