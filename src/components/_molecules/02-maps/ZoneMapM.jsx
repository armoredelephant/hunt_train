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

    const { mapZone, mapMark, markCoords, mapInstance, scoutData } = state;

    const handleCoords = e => {
        e.preventDefault();
        const target = e.target;

        const splitString = target.title.split(' | ')

        const coords = splitString[0],
            distance = parseFloat(splitString[1])

        const markData = {
            coords: coords,
            distance: distance,
            instance: mapInstance,
            mark: mapMark,
            zone: mapZone
        };

        const instanceMarks = scoutData[mapZone][mapInstance];

        if ((instanceMarks.length !== 0) && (distance < instanceMarks[0].distance)) {
            dispatch({ type: 'markUnshift', mark: markData });
        } else {
            dispatch({ type: 'markPush', mark: markData });
        }
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