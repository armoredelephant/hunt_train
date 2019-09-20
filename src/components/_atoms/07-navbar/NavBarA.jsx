import React, { useContext } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';

import 'firebase/auth';

import { DispatchContext, StateContext } from '../../../App';
import NavButtonA from '@A/02-buttons/NavButtonA';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faDoorOpen, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faDoorOpen, faUser);

const Container = styled.div`
    position: relative;
    display: flex;
    flex-flow: row;
    width: 100%;
    height: 60px;
    background: ${props => props.theme.darkestbg};
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .8);
    justify-content: flex-end;
`;

const NavContainer = styled.div`
    display: flex;
    flex-flow: row;
    background: ${props => props.theme.darkestbg};
    width: 150px;
    justify-content: space-evenly;
`;

const AvatarContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
`;

const Avatar = styled.img`
    display: flex;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    align-self: center;
`;

const TextContainer = styled.div`
    margin-right: 5px;
`;

const NavBarA = props => {
    const dispatch = useContext(DispatchContext);
    const state = useContext(StateContext);
    const { user } = state;

    const avatarURL = user.avatar;

    // handleNav
    const handleNav = () => {

    }

    // handleLogout => will require firebase.auth() import
    const handleLogout = () => {
        firebase.auth().signOut();
        dispatch({ type: 'logout' });
    };

    return (
        <Container>
            <AvatarContainer>
                <Avatar src={avatarURL} />
            </AvatarContainer>
            <NavContainer>
                <NavButtonA handleClick={handleNav}>
                    <TextContainer>Profile</TextContainer>
                    <FontAwesomeIcon icon={faUser} size='1x' />
                </NavButtonA>
                <NavButtonA handleClick={handleLogout}>
                    <TextContainer>Logout</TextContainer>
                    <FontAwesomeIcon icon={faDoorOpen} size='1x' />
                </NavButtonA>
            </NavContainer>
        </Container>
    );
};
export default NavBarA;