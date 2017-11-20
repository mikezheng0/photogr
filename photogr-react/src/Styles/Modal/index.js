import styled from 'styled-components'

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.3);
  padding: 50px;
`

const ModalBody = styled.div`
  background-color: #fff;
  border-radius: 5px;
  max-width: 800px;
  min-height: 300px;
  margin: 0 auto;
  padding: 1em;
`

export {
  ModalBody, 
  Backdrop
}