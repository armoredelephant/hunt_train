import React, { useContext } from 'react';
import styled from 'styled-components';

import { DispatchContext, StateContext } from '@O/00-pages/ScouterPageO';

import NextButtonA from '@A/02-buttons/NextButtonA';
import PreviousButtonA from '@A/02-buttons/PreviousButtonA';
import MarkDisplayM from '@M/00-forms/MarkDisplayM';

const RouteContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  align-content: center;
`;

const NextButton = styled.button``;

const PreviousButton = styled.button``;

const RouteContainerA = props => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const { currentMark, currentStop, totalStops } = state;

  const handleNext = () => {
    if (currentStop === totalStops) dispatch({ type: 'end' });

    dispatch({ type: 'nextMark' });
  };

  const handlePrev = () => {
    dispatch({ type: 'prevMark' });
  };

  return (
    <RouteContainer>
      {currentMark ? (
        <>
          <PreviousButtonA handleClick={handlePrev} hidden={currentStop === 0 && true} />
          <MarkDisplayM
            currentMark={currentMark}
            totalStops={totalStops}
            currentStop={currentStop}
          />
          <NextButtonA handleClick={handleNext} hidden={currentStop === totalStops && true} />
        </>
      ) : (
          <p>Train has concluded or hasn't departed!</p>
        )}
    </RouteContainer>
  );
};

export default RouteContainerA;