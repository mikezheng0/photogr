import styled from 'styled-components'

const LinearLayout = styled.div`
display: flex;
flex-direction: ${props=> props.vertical ? 'column': 'row'};
justify-content: ${props=> props.spaceBetween ? 'space-around' : 'space-between'};
align-items: stretch;
`
const FlexItem = styled.div`
  flex: ${props=> props.flex ? props.flex: 1};
`

const justifyEnd = (component) =>
  styled(component)`
    justify-content: flex-end;
  `

const alignRight = (component) => 
  styled(component)`
  text-align: right;
  `
export {
  LinearLayout, 
  FlexItem,
  justifyEnd,
  alignRight
}