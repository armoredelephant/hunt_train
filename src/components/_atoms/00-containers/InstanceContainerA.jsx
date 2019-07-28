import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-flow: row;
    flex: 2 1 auto;
    justify-content: space-between;
`;

const InstanceContainerA = props => {
    const { children } = props;
    return (
        <Container>{children}</Container>
    );
};

export default InstanceContainerA;