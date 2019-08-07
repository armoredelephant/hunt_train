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
    
`;

const MapperM = props => {
    const { instance, mark, zone } = props;

    const dispatch = useContext(DispatchContext);
    const state = useContext(StateContext);

    console.log(state.showModal);

    const handleClick = () => {
        // dispatch should also set markCoords so just the current marks coords will be loader to map.
        dispatch({ type: 'map', zone: zone, mark: mark, instance: instance });
    }

    return (
        <Container>
            <Coords>COORDS</Coords>
            <MapButton onClick={handleClick}>Map</MapButton>
        </Container>
    );
}

export default MapperM;

// <ModalContainer>
// <Map> over the Modal Container