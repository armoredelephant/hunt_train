import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width: 500px;
    height: 200px;
    border: 1px solid red;

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
