import React, { useContext } from 'react';
import styled from 'styled-components';

import { DispatchContext, StateContext } from '@O/00-pages/ScouterPageO';

import RouteContainerA from '@A/00-containers/RouteContainerA';

const Container = styled.div`
  min-width: 300px;
  background-color: ${props => props.theme.cardbg};
  border-radius: ${props => props.theme.brad};
  box-shadow: ${props => props.theme.bshad};
  margin: 5px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-content: center;
  padding: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const StartButton = styled.button`
    display: ${props => props.theme.btnDisplay};
    background-color: ${props => props.theme.cardbg};
    width: ${props => props.theme.btnW};
    height: ${props => props.theme.btnH};
    padding: 12px 25px
    font-size: ${props => props.theme.btnFS};
    text-transform: ${props => props.theme.btnTT};
    letter-spacing: ${props => props.theme.btnLS};
    color: ${props => props.theme.blue};
    border: 1px solid ${props => props.theme.blue};
    border-radius: ${props => props.theme.btnBorderRadius};
    text-align: ${props => props.theme.btnTA};
    text-decoration: ${props => props.theme.btnTD};
    cursor: ${props => props.theme.btnCursor};
    outline: ${props => props.theme.btnOutline};
    line-height: ${props => props.theme.btnLH};
    position: ${props => props.theme.btnPos};
    font-family: ${props => props.theme.ff};
    align-self: center;
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

    dispatch({ type: 'route', route: routeData, mark: markData, count: totalStops });
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
