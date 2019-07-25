import React from 'react';
import styled from 'styled-components';

const Card = styled.div`

`;

const ZoneCardM = props => {
    const { zone, marks, crystals, locations } = props;
    return (
        <Card>
            <h2>{zone}</h2>
        </Card>
    );
};

export default ZoneCardM;
