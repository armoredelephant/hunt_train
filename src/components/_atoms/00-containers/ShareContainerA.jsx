import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-self: center;
`;

// needs input
const Input = styled.input`

`;

// needs a button that will focus the input and run exec(Copy);
const Button = styled.button`

`;

// figure out ref

const ShareContainerA = props => {
    const { url } = props;

    const handleCopy = () => {

    }

    return (
        <Container>
            <Input ref={e => } value={url} readOnly />
            <Button>Copy</Button>
        </Container>
    );
}

export default ShareContainerA;