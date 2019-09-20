import React from 'react';
import styled from 'styled-components';

import ModalCloseHeaderA from '@A/01-headers/ModalCloseHeaderA';

const Container = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    align-self: center;
    width: 384px;
    height: 500px;
    radius: ${props => props.theme.brad};
    margin: 8px;
    background: ${props => props.theme.cardbg};
    box-shadow: ${props => props.theme.bshad};
`;

const Notification = styled.div`
    display: flex;
    align-self: center;
    text-align: center;
    font-family: ${props => props.theme.ff};
    font-size: ${props => props.theme.fntSz};
    color: ${props => props.theme.green};
`;

const LogoutNotificationA = () => {
    return (
        <Container>
            <ModalCloseHeaderA />
            <Notification>
                User has been logged out.
            </Notification>
        </Container>
    );
};

export default LogoutNotificationA;