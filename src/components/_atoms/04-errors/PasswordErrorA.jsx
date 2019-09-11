import React from 'react';
import styled from 'styled-components';

const Error = styled.p`
    color: ${props => props.theme.red};
    visibility: ${props => !props.passError && 'hidden'};
`;

const Container = styled.div`
    display: flex;
    margin-bottom: 15px;
`;

const PasswordErrorA = props => {
    const { passError } = props;
    return (
        <Container>
            <Error passError={passError}>Password must be at least 8 characters.</Error>
        </Container>
    );
};

export default PasswordErrorA;