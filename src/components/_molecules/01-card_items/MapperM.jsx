import React, { useContext } from 'react';
import styled from 'styled-components';

import { DispatchContext, StateContext } from '@O/00-pages/ScouterPageO';

import StyledButtonA from '@A/02-buttons/StyledButtonA';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: ${props => props.theme.between};
  align-items: center;
  width: 80px;
`;

const Coords = styled.p`
  font-size: 16px;
  padding: 10px 0;
  color: ${props => (props.active ? props.theme.green : props.theme.red)};
  font-family: ${props => props.theme.ff};
  text-align: ${props => props.theme.ta};

  @media (max-width: 415px) {
    font-size: ${props => props.theme.mfs};
  }
`;

const MapperM = props => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);

  const { instance, mark, zone } = props;
  const { zoneData, currentMark } = state;

  let markCoords = ' - ';

  const handleClick = () => {
    const coordsArray = zoneData[zone].marks[mark].locations;
    console.log('map clicked');
    dispatch({ type: 'map', zone, mark, instance, markCoords: coordsArray });
  };

  // if (scoutData[zone][instance].length != 0) {
  //   const getMarkData = scoutData[zone][instance].filter(markData => {
  //     return markData.mark === mark;
  //   });
  //   if (getMarkData != 0) {
  //     markCoords = getMarkData[0].coords;
  //   }
  // }

  let currentMarkCoords = '';
  let currentMarkInstance = '';

  if (currentMark) {
    currentMarkCoords = currentMark.coords;
    currentMarkInstance = currentMark.instance;
  }

  return (
    <Container>
      <Coords
        active={
          // prettier-ignore
          !!(currentMarkCoords === markCoords // prettier-ignore
            && currentMarkInstance === instance)
        }
      >
        {markCoords}
      </Coords>
      <StyledButtonA
        handleClick={handleClick}
        text={'Map'}
      />
    </Container>
  );
};

export default MapperM;
