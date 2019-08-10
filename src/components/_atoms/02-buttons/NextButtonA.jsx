import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    visibility: ${props => props.hidden && 'hidden'};
`;

const Button = styled.button`
    align-self: center;
`;

const PreviousButtonA = props => {
    const { handleClick, hidden } = props;

    return (
        <Container hidden={hidden}>
            <Button onClick={handleClick}>
                &gt;
            </Button>
        </Container>
    );
};

export default PreviousButtonA;