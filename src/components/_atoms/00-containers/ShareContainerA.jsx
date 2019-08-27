import React, { useRef } from 'react';
import styled from 'styled-components';

import StyledButtonA from '@A/02-buttons/StyledButtonA';

const Container = styled.div`
    display: flex;
    align-self: center;
    background-color: ${props => props.theme.cardbg};
    border-radius: ${props => props.theme.brad};
    box-shadow: ${props => props.theme.bshad};
    margin: ${props => props.theme.margin};
    display: flex;
    justify-content: center;
    align-content: center;
    padding: ${props => props.theme.pad};
`;

// needs input
const Input = styled.input`
    display: flex;
    border-radius: ${props => props.theme.brad};
    font-family: ${props => props.theme.ff};
    letter-spacing: ${props => props.theme.ls};
    margin-right: 5px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
`;

const ShareContainerA = props => {
    const { url } = props;
    const fullURL = `${url}`;
    const urlRef = useRef(null);

    const handleCopy = () => {
        urlRef.current.select();
        document.execCommand('copy');
    };

    return (
        <Container>
            <Wrapper>
                <Input ref={urlRef} value={fullURL} readOnly />
                <StyledButtonA handleClick={handleCopy} text={'Copy'} />
            </Wrapper>
        </Container>
    );
}

export default ShareContainerA;