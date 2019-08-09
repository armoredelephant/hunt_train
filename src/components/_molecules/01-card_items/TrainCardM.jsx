import React, { useContext } from 'react';
import styled from 'styled-components';

import { DispatchContext, StateContext } from '@O/00-pages/ScouterPageO';

const Container = styled.div`
    min-width: 400px;
    border: 1px solid red;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 5px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    margin: 5px;
    width: 100%;
`;

const TrainRoute = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-content: center;
`;

const TargetInfo = styled.div`
    display: flex;
    flex-flow: column;
`;

const NextButton = styled.button`

`;

const OptimizeButton = styled.button`

`;

const Warning = styled.h2`
    color: white;
`;

const TrainCardM = () => {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    const { currentStop, currentMark, scoutData, totalStops, zoneKeys } = state;

    let zoneOrder = [];

    const handleRouteCreation = () => {

        let routeData = [];

        zoneKeys.map(zone => {
            let instanceData = []
            for (let i = 1; i <= 3; i++) {
                let x = scoutData[zone][i];
                instanceData.push(...x);
            };
            routeData.push(...instanceData);

        });

        const totalStops = routeData.length - 1;

        const markData = routeData[0]

        dispatch({ type: 'route', route: routeData, mark: markData, count: totalStops });

    }

    const handleNext = () => {
        if (currentStop === (totalStops)) dispatch({ type: 'end' });

        dispatch({ type: 'nextMark' });
    }

    return (
        <Container>
            <Wrapper>
                <TrainRoute>
                    {currentMark ?
                        <>
                            <TargetInfo>
                                <h3>{currentMark.coords}</h3>
                                <h3>{currentMark.instance}</h3>
                                <h3>{currentMark.mark}</h3>
                                <h3>{currentMark.zone}</h3>
                            </TargetInfo>
                            {(totalStops === currentStop) &&
                                <Warning>
                                    This is the final stop!
                                </Warning>
                            }
                            <NextButton onClick={handleNext}>
                                Next stop!
                            </NextButton>
                        </> :
                        <p>Train has concluded or hasn't departed!</p>
                    }
                </TrainRoute>
                {/* // } */}
                <OptimizeButton onClick={handleRouteCreation}>
                    {currentMark ? 'Restart Train' : 'Start Train'}
                </OptimizeButton>
            </Wrapper>
        </Container>
    )
};

export default TrainCardM;