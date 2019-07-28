import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-flow: row;
    flex: 1 1 auto;
    align-content: center;
`;

const ZoneMarkContainerA = props => {
    const { children } = props;
    return (
        <Container>{children}</Container>
    );
};

export default ZoneMarkContainerA;