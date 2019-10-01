import React, { useContext } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';

import 'firebase/auth';

import { DispatchContext, StateContext } from '../../../App';
import NavButtonA from '@A/02-buttons/NavButtonA';
import AvatarContainerA from '@A/00-containers/AvatarContainerA';
import SignInContainerA from '@A/00-containers/SignInContainerA';
import ClipSpinnerA from '@A/06-spinners/ClipSpinnerA';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faCheck);

const Container = styled.div`
    position: relative;
    display: flex;
    flex-flow: row;
    width: 100%;
    height: 60px;
    background: ${props => props.theme.darkestbg};
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .8);
    justify-content: flex-end;
    align-items: center;
`;

const IconContainer = styled.div`
    color: ${props => props.theme.green};
`;

const NavContainer = styled.div`
    display: flex;
    flex-flow: row;
    background: ${props => props.theme.darkestbg};
    justify-content: space-evenly;
    margin-right: 8px;
    height: 100%;
    padding-top: 1px;
`;

const TextContainer = styled.div`
    color: ${props => props.verified ? props.theme.green : props.theme.blue};
    margin-right: 5px;
`;

const NavBarA = props => {
    const dispatch = useContext(DispatchContext);
    const state = useContext(StateContext);
    const { authChecked, isLoading, uiConfig, userData } = state;
    // add an auth Error ?
    let avatarURL,
        verified;
    if (userData) {
        avatarURL = userData.avatar;
        verified = userData.verified;
    }

    // handleNav
    const handleNav = () => {
        dispatch({ type: 'verification' });
    }

    // handleLogout => will require firebase.auth() import
    const handleLogout = () => {
        dispatch({ type: 'loading' });
        firebase.auth().signOut()
            .then(() => {
                dispatch({ type: 'logout' });
            });
    };

    return (
        <>
            {!authChecked ?
                <Container>
                    <ClipSpinnerA />
                </Container>
                :
                <Container>
                    {userData ?
                        <>
                            {userData.avatar && <AvatarContainerA url={avatarURL} />}
                            <NavContainer>
                                <NavButtonA handleClick={handleNav}>
                                    <TextContainer>{verified ? 'Verified' : 'Get Verified'}</TextContainer>
                                    {verified &&
                                        <IconContainer>
                                            <FontAwesomeIcon icon={faCheck} size='1x' />
                                        </IconContainer>
                                    }
                                </NavButtonA>
                                <NavButtonA handleClick={handleLogout}>
                                    <TextContainer>Logout</TextContainer>
                                </NavButtonA>
                            </NavContainer>
                        </>
                        :
                        <SignInContainerA
                            config={uiConfig}
                        />
                    }
                </Container>
            }
        </>
    );
};
export default NavBarA;