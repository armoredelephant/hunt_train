import React from 'react';
import styled from 'styled-components';

const AvatarContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Avatar = styled.img`
    display: flex;
    border-radius: 50%;
    height: 40px;
    width: 40px;
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