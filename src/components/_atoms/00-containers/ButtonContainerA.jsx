import styled from 'styled-components';

const ButtonContainerA = styled.div`
  display: flex;
  flex-flow: ${props => props.column ? 'column' : 'row'};
  justify-content: space-around;
  align-content: center;
  margin: .313em;
`;

export default ButtonContainerA;