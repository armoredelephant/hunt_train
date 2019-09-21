import React from 'react';
import styled from 'styled-components';

import LogInHeaderA from '@A/01-headers/LogInHeaderA';
import LogInBodyContainerA from '@A/00-containers/LogInBodyContainerA';
import ModalCloseHeaderA from '@A/01-headers/ModalCloseHeaderA';

const Container = styled.div`
    display: inline-flex;
    flex-flow: column;
    align-items: center;
    align-self: center;
    width: 384px;
    overflow: auto;
    radius: ${props => props.theme.brad};
    margin: 8px;
    background: ${props => props.theme.cardbg};
    box-shadow: ${props => props.theme.bshad};
`;

const LogInFormM = props => {
    const { history } = props;
    return (
        <Container>
            <ModalCloseHeaderA />
            <LogInHeaderA />
            <LogInBodyContainerA history={history} />
        </Container>
    );
};

export default LogInFormM;