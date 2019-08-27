import React, { useContext } from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
import 'firebase/database';

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
  const { cardKey, zoneData, currentMark, scoutData } = state;

  const fbDatabase = firebase.database();
  const instanceRef = fbDatabase.ref(`cards/${cardKey}/scoutData/${zone}/${instance}`)

  let markCoords = ' - ';

  const handleClick = () => {
    const coordsArray = zoneData[zone].marks[mark].locations;
    dispatch({ type: 'map', zone, mark, instance, markCoords: coordsArray });
  };

  if (scoutData && scoutData[zone] && scoutData[zone][instance]) {
    const data = scoutData[zone][instance];
    const keys = Object.keys(data);
    keys.map(key => {
      const currentMarks = data[key];
      if (currentMarks.mark === mark) markCoords = currentMarks.coords;
    })
  }

  let currentMarkCoords = '';
  let currentMarkInstance = '';

  if (currentMark) {
    currentMarkCoords = currentMark.coords;
    currentMarkInstance = currentMark.instance - 1;
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
