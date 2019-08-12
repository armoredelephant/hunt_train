import React, { useContext } from 'react';
import styled from 'styled-components';

import { DispatchContext, StateContext } from '@O/00-pages/ScouterPageO';

import RouteContainerA from '@A/00-containers/RouteContainerA';

const Container = styled.div`
  background-color: ${props => props.theme.cardbg};
  border-radius: ${props => props.theme.brad};
  box-shadow: ${props => props.theme.bshad};
  margin: ${props => props.theme.margin};
  display: flex;
  flex-flow: column;
  justify-content: ${props => props.theme.between};
  align-content: center;
  padding: ${props => props.theme.pad};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const StartButton = styled.button`
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

const TrainCardM = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const { currentMark, scoutData, zoneKeys } = state;

  const handleRouteCreation = () => {
    const routeData = [];

    zoneKeys.map(zone => {
      const instanceData = [];
      for (let i = 1; i <= 3; i++) {
        const x = scoutData[zone][i];
        instanceData.push(...x);
      }
      routeData.push(...instanceData);
    });

    const totalStops = routeData.length - 1;

    const markData = routeData[0];

    dispatch({
      type: 'route',
      route: routeData,
      mark: markData,
      count: totalStops
    });
  };

  return (
    <Container>
      {currentMark && <RouteContainerA />}
      <ButtonContainer>
        <StartButton onClick={handleRouteCreation}>
          {currentMark ? 'Restart Train' : 'Start Train'}
        </StartButton>
      </ButtonContainer>
    </Container>
  );
};

export default TrainCardM;
