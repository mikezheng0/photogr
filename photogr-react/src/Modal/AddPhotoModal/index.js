import React from 'react'
import BaseModal from '../Base';
import {Button, TextInput, LinearLayout, FlexItem} from '../../Styles'


const AddPhotoModal = ({isOpen, ...rest}) => (
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
          <h4>Image</h4>
          <TextInput type="text" placeholder="Title"/>
          <TextInput type="text" placeholder="Description"/>
          <FlexItem>
            <TextInput type="checkbox" name="selling" id="radio-selling" /> <label htmlFor="radio-selling">Enable Selling</label>
            <TextInput type="text" placeholder="Price"/>
          </FlexItem>
          <select placeholder="">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
          </select>
        </LinearLayout>
      </FlexItem>
    </LinearLayout>
  </BaseModal>
)

export default AddPhotoModal