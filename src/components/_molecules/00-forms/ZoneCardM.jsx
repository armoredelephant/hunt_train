import React from 'react';
import styled from 'styled-components';

import CardHeaderA from '@A/03-card_items/CardHeaderA';

const CardContainer = styled.div`
    min-width: 500px;
    min-height: 500px;
    border: 1px solid red;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 5px;
`;

const Card = styled.div`
    display: flex;
    flex-flow: column;
    margin: 5px;
    width: 100%;
`;

const ZoneCardM = props => {
    const { zone, marks, crystals, locations } = props;
    return (
        <CardContainer>
            <Card>
                <CardHeaderA zone={zone} />
            </Card>
        </CardContainer>
    );
};

export default ZoneCardM;
