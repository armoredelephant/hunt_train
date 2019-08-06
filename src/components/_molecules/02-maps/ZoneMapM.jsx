import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-self: center;
`;

const Image = styled.img`
    align-self: center;
    max-width: 100%;
`;

const ZoneMapM = props => {
    const { mapZone, mapMark } = props
    return (
        <Image src={`/resources/maps/${mapZone}.jpg`} />
    )
};

export default ZoneMapM;