import React from 'react';
import styled from 'styled-components';

import CardHeaderM from '@M/01-card_items/CardHeaderM';
import CardRowM from '@M/01-card_items/CardRowM';

const CardContainer = styled.div`
    min-width: 400px;
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
                <CardHeaderM zone={zone} />
                {marks.map(mark => {
                    const rdmKey = Math.random()
                        .toString(36)
                        .substring(7);
                    return (
                        <CardRowM
                            key={rdmKey}
                            mark={mark} />
                    );
                })}
            </Card>
        </CardContainer>
    );
};

export default ZoneCardM;
