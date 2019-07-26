import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-flow; row;
    justify-content: space-between;
    border: 1px solid green; 
`;

const ZoneContainer = styled.div`
    display: flex;
    flex-flow: row;
    flex: 1 1 auto;
`;

const Zone = styled.h3`
    padding: 0;
    margin: 0;
    color: ${props => props.theme.fntClr};
    font-family: ${props => props.theme.ff};
`

const InstanceContainer = styled.div`
    display: flex;
    flex-flow: row;
    flex: 2 1 auto;
    justify-content: space-between;
`;

const Instance = styled.h3`
    padding: 0;
    margin: 0;
    color: ${props => props.theme.fntClr};
    font-family: ${props => props.theme.ff};
`

const CardHeaderA = props => {
    const { zone } = props;
    const instances = [1, 2, 3];
    return (
        <Container>
            <ZoneContainer>
                <Zone>{zone}</Zone>
            </ZoneContainer>
            <InstanceContainer>
                {instances.map(instance => {
                    const rdmKey = Math.random()
                        .toString(36)
                        .substring(7);
                    return <Instance key={rdmKey}>{instance}</Instance>
                })}
            </InstanceContainer>
        </Container>
    );
};

export default CardHeaderA;