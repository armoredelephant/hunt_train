import React, { useContext } from 'react';
import styled from 'styled-components';

import { DispatchContext, StateContext } from '@O/00-pages/ScouterPageO';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: ${props => props.theme.between};
  align-items: center;
  width: 80px;
`;

const MapButton = styled.button`
  color: ${props => props.theme.cardbg};
  font-family: ${props => props.theme.ff};
  letter-spacing: ${props => props.theme.ls};
  border: none;
  padding: 3px 16px;
  outline: none;
  font-size: ${props => props.theme.btnFS};
  border-radius: ${props => props.theme.brad};
  background-color: ${props => props.theme.blue};
  text-decoration: none;

  &:visited,
  &:focus,
  &:hover,
  &:active {
    text-decoration: none;
    outline: none;
  }

  @media (max-width: 415px) {
    font-size: ${props => props.theme.mfs};
    padding: 1px 12px;
  }
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
  const { zoneData, scoutData, currentMark, mapMark } = state;

  let markCoords = ' - ';

  const handleClick = () => {
    const coordsArray = zoneData[zone].marks[mark].locations;

    dispatch({ type: 'map', zone, mark, instance, markCoords: coordsArray });
  };

  if (scoutData[zone][instance].length != 0) {
    const getMarkData = scoutData[zone][instance].filter(markData => {
      return markData.mark === mark;
    });
    if (getMarkData != 0) {
      markCoords = getMarkData[0].coords;
    }
  }

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
      <MapButton onClick={handleClick}>Map</MapButton>
    </Container>
  );
};

export default MapperM;
