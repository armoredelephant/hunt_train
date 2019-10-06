import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    font-family: ${props => props.theme.ff};
    color: ${props => props.isTitle ? props.theme.red : props.theme.fntClr};
    letter-spacing: ${props => props.theme.ls};
`;

const GuideItemContainerA = props => {
    const { children, isTitle } = props;
    return <Container isTitle={isTitle}>{children}</Container>
};

export default GuideItemContainerA;