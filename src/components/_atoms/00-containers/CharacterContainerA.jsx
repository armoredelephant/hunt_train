import React, { useContext } from 'react';
import styled from 'styled-components';

import AvatarContainerA from '@A/00-containers/AvatarContainerA';
import CharacterFieldsA from '@A/05-form_fields/CharacterFieldsA';
import ClipSpinnerA from '@A/06-spinners/ClipSpinnerA';
import StyledButtonA from '@A/02-buttons/StyledButtonA';
import Axios from 'axios';

import { StateContext, DispatchContext } from '../../../App';

const API_HOST_URL = process.env.API_URL;

const CharacterContainer = styled.div`
    display: flex;
    flex-flow: row;
    align-self: center;
    width: 80%;
    justify-content: space-evenly;
    margin-bottom: .625em;
`;

const CharacterContainerA = () => {
    const dispatch = useContext(DispatchContext);
    const state = useContext(StateContext);

    const { isLoading, userData } = state;

    const avatarURL = userData.avatar,
        server = userData.server,
        character = userData.charName;

    const handleVerify = () => {
        const token = userData.verificationToken,
            userId = userData.id

        dispatch({ type: 'clearNotifications' }); // clean up errors

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
                            dispatch({ type: 'loading' });
                        })
                        .catch(() => {
                            dispatch({ type: 'formError', error: 'There was a problem with this request. Please try again.' });
                        });
                }
                if (!verified) dispatch({ type: 'formError', error: 'Unable to verify. Please check the token and try again.' });
            })
    };

    return (
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
    );
};

export default CharacterContainerA;
