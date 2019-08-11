import React from 'react';
import styled from 'styled-components';

import RowContainerA from '@A/00-containers/RowContainerA';
import InstanceContainerA from '@A/00-containers/InstanceContainerA';
import ZoneMarkContainerA from '@A/00-containers/ZoneMarkContainerA';

import MapperM from '@M/01-card_items/MapperM';

const Mark = styled.h4`
  font-family: ${props => props.theme.ff};
  color: ${props => props.theme.fntClr};
  margin: 0;
  align-self: flex-end;

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
      color: red;
    }
`;

const CardRowM = props => {
  const { mark, zone } = props;
  const instances = [1, 2, 3];

  return (
    <RowContainerA>
      <ZoneMarkContainerA>
        <Mark>{mark}</Mark>
      </ZoneMarkContainerA>
      <InstanceContainerA column>
        {instances.map(instance => {
          const rdmKey = Math.random()
            .toString(36)
            .substring(7);
          return <MapperM instance={instance} key={rdmKey} mark={mark} zone={zone} />;
        })}
      </InstanceContainerA>
    </RowContainerA>
  );
};

export default CardRowM;
