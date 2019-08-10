import React, { useContext } from 'react';
import styled from 'styled-components';

import { DispatchContext, StateContext } from '@O/00-pages/ScouterPageO';

const Container = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    width: 80px;
`;

const MapButton = styled.button`
    color: white;
`;

const Coords = styled.p`
    font-size: 12px;
    color: white;
    text-align: ${props => props.theme.ta};
`;

const MapperM = props => {
    const dispatch = useContext(DispatchContext);
    const state = useContext(StateContext);

    const { instance, mark, zone } = props;
    const { zoneData, scoutData, mapMark } = state;

    let markCoords = ' - ';

    const handleClick = () => {
        const coordsArray = zoneData[zone].marks[mark].locations;

        dispatch({ type: 'map', zone: zone, mark: mark, instance: instance, markCoords: coordsArray });
    }

    if (scoutData[zone][instance].length != 0) {
        const getMarkData = scoutData[zone][instance].filter(markData => {
            return markData.mark === mark
        })
        if (getMarkData != 0) {
            markCoords = getMarkData[0].coords
        }
    }

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