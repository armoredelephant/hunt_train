import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content: center;
  padding: ${props => props.theme.pad};
  flex-grow: 2;
`;

const Label = styled.p`
  text-align: ${props => props.theme.ta};
  letter-spacing: ${props => props.theme.ls};
  font-family: ${props => props.theme.ff};
  color: ${props => props.theme.fntClr};

  @media (max-width: 25.938em) {
    font-size: ${props => props.theme.mfs};
  }
`;

const Info = styled.p`
  font-family: ${props => props.theme.ff};
  letter-spacing: ${props => props.theme.ls};
  font-size: ${props => props.theme.fntSz};
  border-bottom: .063em solid ${props => props.theme.darkestbg};
  text-align: ${props => props.theme.ta};
  padding-bottom: .188em;
  color: ${props => props.theme.green};

  @media (max-width: 25.875em) {
    font-size: ${props => props.theme.mfs};
  }
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
