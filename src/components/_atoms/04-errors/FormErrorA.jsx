import React from 'react';
import styled from 'styled-components';

const Error = styled.p`
    color: ${props => props.theme.red};
    visibility: ${props => !props.formError && 'hidden'};
`;

const Container = styled.div`
    display: flex;
    margin-bottom: 15px;
`;

const FormErrorA = props => {
    const { formError, errorMessage } = props;
    return (
        <Container>
            <Error formError={formError}>{errorMessage}</Error>
        </Container>
    );
};

export default FormErrorA;