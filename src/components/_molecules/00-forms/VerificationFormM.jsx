import React, { useContext } from 'react';
import styled from 'styled-components';

import AvatarContainerA from '@A/00-containers/AvatarContainerA';
import CharacterFieldsA from '@A/05-form_fields/CharacterFieldsA';
import StyledButtonA from '@A/02-buttons/StyledButtonA';
import FormErrorA from '@A/04-errors/FormErrorA';
import ShareContainerA from '@A/00-containers/ShareContainerA';
import WrongCharBoxA from '@A/05-form_fields/WrongCharBoxA';
import ClipSpinnerA from '@A/06-spinners/ClipSpinnerA';

import { DispatchContext, StateContext } from '../../../App';
import Axios from 'axios';

const API_HOST_URL = process.env.API_URL;

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
    const dispatch = useContext(DispatchContext);
    const { formError, errorMessage, isLoading, userData } = state;
    const avatarURL = userData.avatar,
        server = userData.server,
        character = userData.charName,
        token = userData.verificationToken;

    const handleVerify = () => {
        const token = userData.verificationToken,
            userId = userData.id

        dispatch({ type: 'clearErrors' }); // clean up errors

        dispatch({ type: 'loading' });

        Axios.get(`https://xivapi.com/character/${userId}`, { mode: 'cors' })
            .then(response => {
                const bio = response.data.Character.Bio;
                const verified = bio.includes(token);
                if (verified) {
                    const options = {
                        userData: userData
                    };

                    Axios.post(`${API_HOST_URL}/api/auth/verify`, options)
                        .then(response => {
                            const userData = response.data.user;
                            dispatch({ type: 'user', userData: userData, discord: userData.verified });
                        })
                        .catch(() => {
                            dispatch({ type: 'formError', error: 'There was a problem with this request. Please try again.' });
                        });
                } else {
                    dispatch({ type: 'formError', error: 'Unable to verify. Please check the token and try again.' });
                };
                dispatch({ type: 'loading' });
            });
    };

    return (
        <Container>
            <VerifyContainer>
                <ShareContainerA text={'Copy Token'} verify={true} val={token} />
            </VerifyContainer>
            <CharacterContainer>
                {isLoading ?
                    <ClipSpinnerA />
                    :
                    <>
                        <AvatarContainerA url={avatarURL} />
                        <CharacterFieldsA character={character} server={server} />
                        <StyledButtonA
                            isDisabled={userData.verified}
                            text={userData.verified ? 'Verified' : 'Verify'}
                            handleClick={handleVerify}
                        />
                    </>
                }
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