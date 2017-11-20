import React from 'react'
import Container from './container'
import {Backdrop, ModalBody, Button} from '../../Styles'

const Modal = ({children, handleOverlayClick, handleBodyClick, state}) => (
  <Backdrop onClick={handleOverlayClick} >
    <ModalBody onClick={handleBodyClick}>
      {children}
      <div>
        <Button onClick={handleOverlayClick}>
          Close
        </Button>
      </div>
    </ModalBody>
  </Backdrop>
)

export default Container(Modal)