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

const ZoneMap = styled.map`

`;

const ZoneArea = styled.area`

`;

const ZoneMapM = props => {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    const { mapZone, mapMark, zoneData } = state;

    // a dispatch that will set markCoords based on 

    const markCoords = zoneData[mapZone]

    return (
        <>
            <Image src={`/resources/maps/${mapZone}_${mapMark}.svg`} usemap='#zone-map' />
            {/* <ZoneMap name="zone-map">
                {coords.map(coord => {
                    const rdmKey = Math.random()
                        .toString(36)
                        .substring(7);
                    return (
                        <ZoneArea
                            coords={coords}
                            key={rdmKey}
                            shape='circle'
                            title={`( ${coord.x}, ${coord.y} )`}
                        />
                    );
                })}
            </ZoneMap> */}
        </>
    )
};

export default ZoneMapM;