import React, { useContext } from 'react';
import styled from 'styled-components';

import { StateContext, DispatchContext } from '@O/00-pages/ScouterPageO';

const Container = styled.div`
    display: flex;
    align-self: center;
`;

const Image = styled.img`
    align-self: center;
    max-width: 100%;
`;

const ZoneMapM = () => {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    const { mapZone, mapMark, markCoords, mapInstance } = state;

    // need a click handler that will contain a dispatch to pass down selected coords.

    const handleCoords = e => {
        e.preventDefault();
        const target = e.target;

        const splitString = target.title.split(' | ')

        const coords = splitString[0],
            distance = parseFloat(splitString[1])

        // mark isn't important at this point
        // can just pass the coords and distance I believe

        const mark = {
            coords: coords,
            distance: distance
        };

        dispatch({ type: 'coord', coords: mark }) // dispatch to update scoutData here.
    }

    return (
        <>
            <Image src={`/resources/maps/${mapZone}_${mapMark}.svg`} useMap='#zone-map' />
            <map name="zone-map">
                {markCoords.map(location => {
                    const rdmKey = Math.random()
                        .toString(36)
                        .substring(7);
                    return (
                        <area
                            coords={location.coords}
                            key={rdmKey}
                            onClick={handleCoords}
                            shape='circle'
                            title={`( ${location.x}, ${location.y} ) | ${location.distance}`}
                        />
                    );
                })}
            </map>
        </>
    )
};

export default ZoneMapM;