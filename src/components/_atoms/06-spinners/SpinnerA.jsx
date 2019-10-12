import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  display: flex;
  align-self: center;
  
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: .125em solid grey;
  border-right: .125em solid grey;
  border-bottom: .125em solid grey;
  border-left: .25em solid black;
  background: transparent;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
`;

export default Spinner;