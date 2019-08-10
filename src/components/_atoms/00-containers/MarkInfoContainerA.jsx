import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-content: center;
    padding: 5px;
`;

const Label = styled.p`
    text-align: ${props => props.theme.ta};
    color: white;
`;

const Info = styled.p`
    border-bottom: 1px solid gray;
    text-align: ${props => props.theme.ta};
    color: white;
`;

const MarkInfoContainerA = props => {
    const { data, label } = props;

    return (
        <Container>
            <Info>{data}</Info>
            <Label>{label}</Label>
        </Container>
    );
};

export default MarkInfoContainerA;