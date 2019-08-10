import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content: center;
  padding: 5px;
`;

const Label = styled.p`
  text-align: ${props => props.theme.ta};
  letter-spacing: ${props => props.theme.ls};
  font-family: ${props => props.theme.ff};
  color: ${props => props.theme.fntClr};
`;

const Info = styled.p`
  font-family: ${props => props.theme.ff};
  letter-spacing: ${props => props.theme.ls};
  font-size: ${props => props.theme.fntSz};
  border-bottom: 1px solid #2b2b2b;
  text-align: ${props => props.theme.ta};
  padding-bottom: 3px;
  color: ${props => props.theme.red};
`;

const MarkInfoContainerA = props => {
  const { data, label } = props;

  return (
    <Container>
      <Info>{data}</Info>
      <Label>{label}</Label>
    </Container>
  );
};

export default MarkInfoContainerA;
