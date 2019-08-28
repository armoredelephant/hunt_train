import styled from 'styled-components';

const ButtonContainerA = styled.div`
  display: flex;
  flex-flow: ${props => props.column ? 'column' : 'row'};
  justify-content: center;
  align-content: center;
  margin: 5px;
`;

export default ButtonContainerA;