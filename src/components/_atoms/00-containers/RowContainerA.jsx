import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-flow; row;
    justify-content: space-between;
    border: 1px solid green; 
`;

const RowContainerA = props => {
    const { children } = props;
    return (
        <Container>{children}</Container>
    );
};

export default RowContainerA;