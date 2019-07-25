import React from 'react';
import styled from 'styled-components';

const Container = styled.main`

`;

const MainContainerA = props => {
    const { children } = props;
    return (
        <Container>{children}</Container>
    );
};

export default MainContainerA;