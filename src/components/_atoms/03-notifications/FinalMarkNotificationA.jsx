import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    visibility: ${props => props.hidden && 'hidden'};
`;

const Notification = styled.p`
    align-self: center;
    text-align: center;
    color: ${props => props.theme.fntClr}
`;

const FinalMarkNotificationA = props => {
    const { hidden } = props;
    return (
        <Container hidden={hidden}>
            <Notification>* Final Stop *</Notification>
        </Container>
    );
};

export default FinalMarkNotificationA;
