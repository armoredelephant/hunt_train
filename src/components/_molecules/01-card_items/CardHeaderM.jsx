import React from 'react';
import styled from 'styled-components';

import RowContainerA from '@A/00-containers/RowContainerA';
import InstanceContainerA from '@A/00-containers/InstanceContainerA';
import ZoneMarkContainerA from '@A/00-containers/ZoneMarkContainerA';

const Zone = styled.h3`
  padding: 0;
  margin: 0;
  color: ${props => props.theme.fntClr};
  font-family: ${props => props.theme.ff};
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

const Instance = styled.h3`
  align-self: center;
  padding: 0;
  margin: 0;
  color: ${props => props.theme.fntClr};
  font-family: ${props => props.theme.ff};
  text-align: ${props => props.theme.ta};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;

  @media only screen
    and (device-width: 375)
    and (device-height: 812px)
    and (-webkit-device-pixel-ration: 3) {
      width: ${props => props.theme.mw};
  };

  @media only screen
      and (device-width: 414px)
      and (device-height: 896px)
      and (-webkit-device-pixel-ratio: 3) {
        width: ${props => props.theme.mw};
  };
  
  @media only screen
    and (device-width: 375px)
    and (device-height: 812px)
    and (-webkit-device-pixel-ratio: 3) {
      width: ${props => props.theme.mw};
  };
  
  @media only screen
    and (device-width: 414px)
    and (device-height: 896px)
    and (-webkit-device-pixel-ratio: 2) {
      width: ${props => props.theme.mw};
  };

  @media only screen
    and (device-width: 375px)
    and (device-height: 667px)
    and (-webkit-device-pixel-ratio: 2) {
      width: ${props => props.theme.mw};
  };

  @media only screen
    and (device-width: 414px)
    and (device-height: 736px)
    and (-webkit-device-pixel-ratio: 3) {
      width: ${props => props.theme.mw};
  };

  @media only screen
    and (min-device-width: 375px)
    and (max-device-width: 667px) {
      width: ${props => props.theme.mw};
  }

  @media only screen
    and (min-device-width: 414px)
    and (max-device-width: 667px) {
      width: ${props => props.theme.mw};
  }
`;

const CardHeaderM = props => {
  const { zone } = props;
  const instances = [1, 2, 3];
  return (
    <RowContainerA>
      <ZoneMarkContainerA>
        <Zone>{zone}</Zone>
      </ZoneMarkContainerA>
      <InstanceContainerA>
        {instances.map(instance => {
          const rdmKey = Math.random()
            .toString(36)
            .substring(7);
          return (
            <Container>
              <Instance key={rdmKey}>{instance}</Instance>
            </Container>
          );
        })}
      </InstanceContainerA>
    </RowContainerA>
  );
};

export default CardHeaderM;
