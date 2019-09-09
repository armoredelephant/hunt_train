import React from 'react';
import styled from 'styled-components';

import LoginHeaderA from '@A/01-headers/LoginHeaderA';

const Container = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    align-self: center;
    width: 384px;
    border: 1px solid white;
    border-radius: ${props => props.theme.brad};
    margin-top: 5px;
    height: 800px;
    background: #FFFFFF;
`;
// Container - flex column

// LoginHeader - flex row;

// AuthForm - flex column

const LoginFormM = () => {
    return (
        <Container>
            <LoginHeaderA />
        </Container>
    );
};

export default LoginFormM;