import React, { useContext } from 'react';
import styled from 'styled-components';

import AvatarContainerA from '@A/00-containers/AvatarContainerA';
import CharacterFieldsA from '@A/05-form_fields/CharacterFieldsA';
import StyledButtonA from '@A/02-buttons/StyledButtonA';
import FormErrorA from '@A/04-errors/FormErrorA';
import ShareContainerA from '@A/00-containers/ShareContainerA';
import WrongCharBoxA from '@A/05-form_fields/WrongCharBoxA';

import { StateContext } from '../../../App';

const Container = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    margin-bottom: 10px;
`;

const VerifyContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-content: center;
    margin-bottom: 10px;
`;

const CharacterContainer = styled.div`
    display: flex;
    flex-flow: row;
    align-self: center;
    width: 80%;
    justify-content: space-evenly;
    margin-bottom: 10px;
`;

const VerificationFormM = () => {
    const state = useContext(StateContext);
    const { formError, errorMessage, userData } = state;
    const avatarURL = userData.avatar,
        server = userData.server,
        character = userData.charName,
        token = userData.verificationToken;

    const handleVerify = () => {

        // will dispatch formError if verification failed.
    }

    return (
        <Container>
            <VerifyContainer>
                <ShareContainerA text={'Copy Token'} verify={true} val={token} />
            </VerifyContainer>
            <CharacterContainer>
                <AvatarContainerA url={avatarURL} />
                <CharacterFieldsA character={character} server={server} />
                <StyledButtonA text={'Verify'} handleClick={handleVerify} />
            </CharacterContainer>
            <FormErrorA
                errorMessage={errorMessage}
                formError={formError}
            />
            <WrongCharBoxA />
        </Container>

    );
};

export default VerificationFormM;