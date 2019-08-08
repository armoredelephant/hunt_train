import React, { useContext } from 'react';
import styled from 'styled-components';

import { DispatchContext, StateContext } from '@O/00-pages/ScouterPageO';

const Container = styled.div`
    display: flex;
    flex-flow: column;
`;

const MapButton = styled.button`
    color: white;
`;

const Coords = styled.div`
    color: white;
`;

const MapperM = props => {
    const dispatch = useContext(DispatchContext);
    const state = useContext(StateContext);

    const { instance, mark, zone } = props;
    const { zoneData, scoutData } = state;

    let markCoords = ' - ';

    const handleClick = () => {
        const coordsArray = zoneData[zone].marks[mark].locations;
        // dispatch should also set markCoords so just the current marks coords will be loader to map.
        dispatch({ type: 'map', zone: zone, mark: mark, instance: instance, markCoords: coordsArray });
    }

    if (scoutData[zone][instance][mark] != null) { markCoords = scoutData[zone][instance][mark].coords }

    return (
        <Container>
            <Coords>{markCoords}</Coords>
            <MapButton onClick={handleClick}>Map</MapButton>
        </Container>
    );
}

export default MapperM;

// <ModalContainer>
// <Map> over the Modal Container