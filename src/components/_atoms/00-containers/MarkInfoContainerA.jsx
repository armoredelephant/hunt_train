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

  @media only screen
    and (device-width: 375)
    and (device-height: 812px)
    and (-webkit-device-pixel-ration: 3) {
      font-size: ${props => props.theme.mfs};
  };

  @media only screen
      and (device-width: 414px)
      and (device-height: 896px)
      and (-webkit-device-pixel-ratio: 3) {
      font-size: ${props => props.theme.mfs};
  };
  
  @media only screen
    and (device-width: 375px)
    and (device-height: 812px)
    and (-webkit-device-pixel-ratio: 3) {
    font-size: ${props => props.theme.mfs};
  };
  
  @media only screen
    and (device-width: 414px)
    and (device-height: 896px)
    and (-webkit-device-pixel-ratio: 2) {
    font-size: ${props => props.theme.mfs};
  };

  @media only screen
    and (device-width: 375px)
    and (device-height: 667px)
    and (-webkit-device-pixel-ratio: 2) {
    font-size: ${props => props.theme.mfs};
  };

  @media only screen
    and (device-width: 414px)
    and (device-height: 736px)
    and (-webkit-device-pixel-ratio: 3) {
    font-size: ${props => props.theme.mfs};
  };

  @media only screen
    and (min-device-width: 375px)
    and (max-device-width: 667px) {
      font-size: ${props => props.theme.mfs};
  }

  @media only screen
    and (min-device-width: 414px)
    and (max-device-width: 667px) {
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
