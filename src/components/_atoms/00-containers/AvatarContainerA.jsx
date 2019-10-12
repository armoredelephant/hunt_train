import React from 'react';
import styled from 'styled-components';

const AvatarContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-right: .5em;
`;

const Avatar = styled.img`
    display: flex;
    border-radius: 50%;
    height: 2.5em;
    width: 2.5em;
    align-self: center;
`;

const AvatarContainerA = props => {
    const { url } = props;
    return (
        <AvatarContainer>
            <Avatar src={url} />
        </AvatarContainer>
    );
};

export default AvatarContainerA;