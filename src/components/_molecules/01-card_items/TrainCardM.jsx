import React, { useContext } from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
import 'firebase/database';

import initialState from 'Utils/initialState';

import { DispatchContext, StateContext } from '@O/00-pages/ScouterPageO';

import RouteContainerA from '@A/00-containers/RouteContainerA';
import StyledButtonA from '@A/02-buttons/StyledButtonA';

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
  min-width: 300px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-content: center;
  margin: 5px;
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

  const { currentMark, scoutedZoneKeys, scoutData, zoneKeys } = state;

  const handleRouteCreation = () => {
    const routeData = [];

    // this is used to re-arrange array to keep them in order.
    const newZoneKeys = zoneKeys.filter(zone => {
      return scoutedZoneKeys.includes(zone);
    })

    newZoneKeys.map(zone => {
      let lastDistance;

      for (let i = 0; i <= 2; i++) {
        const instanceData = [];
        // if there is scoutData for this instance, proceed.
        if (scoutData[zone][i]) {
          const markKeys = Object.keys(scoutData[zone][i]);
          markKeys.map(key => {
            const keyData = scoutData[zone][i][key];
            if (keyData.distance < lastDistance) {
              instanceData.unshift(keyData);
            } else {
              instanceData.push(keyData);
            }
            lastDistance = keyData.distance;
          });
        }
        routeData.push(...instanceData)
      }
    });

    const totalStops = routeData.length - 1;

    const markData = routeData[0];

    if (markData) dispatch({
      type: 'route',
      route: routeData,
      mark: markData,
      count: totalStops
    });
  };

  const handleShare = e => {
    e.preventDefault();
    console.log('clicked')
    dispatch({ type: 'share' });
  }

  const handleMap = () => {
    dispatch({ type: 'mapToggler' }) // mark map
  }

  return (
    <Container>
      {/* {currentMark && <RouteContainerA />} */}
      <RouteContainerA />
      <ButtonContainer>
        <>
          <StyledButtonA isDisabled={true} text={'Guide'} />
        </>
        <>
          <StyledButtonA handleClick={handleShare} text={'Share'} />
        </>
        <>
          <StyledButtonA
            isDisabled={currentMark.coords === ' - '}
            handleClick={handleMap} text={'Map'}
          />
        </>
      </ButtonContainer>
      <ButtonContainer>
        <>
          <StartButton
            onClick={handleRouteCreation}
          >
            {currentMark === initialState.currentMark ? 'Start Train' : 'Restart Train'}
          </StartButton>
        </>
      </ButtonContainer>
    </Container>
  );
};

export default TrainCardM;
