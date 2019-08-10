import React, { useContext } from 'react';
import styled from 'styled-components';

import { DispatchContext, StateContext } from '@O/00-pages/ScouterPageO';

import RouteContainerA from '@A/00-containers/RouteContainerA';

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

const StartButton = styled.button`

`;

const TrainCardM = () => {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    const { currentMark, scoutData, zoneKeys } = state;

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

    return (
        <>
            {currentMark &&
                <RouteContainerA />
            }
            <Container>
                <StartButton onClick={handleRouteCreation}>
                    {currentMark ? 'Restart Train' : 'Start Train'}
                </StartButton>
            </Container>
        </>
    )
};

export default TrainCardM;