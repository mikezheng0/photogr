import styled from 'styled-components'

const LinearLayout = styled.div`
display: flex;
flex-direction: ${props=> props.vertical ? 'column': 'row'};
justify-content: space-around;  
align-items: stretch;
`
const FlexColumn = styled.div`
width: ${props=> props.size ? props.size: 100}%;
`

export {
  LinearLayout, 
  FlexColumn
}