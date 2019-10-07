import React, { useContext } from 'react';
import styled from 'styled-components';

import { StateContext } from '../../../App';

import NavButtonContainerA from '@A/00-containers/NavButtonContainerA';
import SignInContainerA from '@A/00-containers/SignInContainerA';
import ClipSpinnerA from '@A/06-spinners/ClipSpinnerA';
import GuideButtonA from '@A/02-buttons/GuideButtonA';

const Container = styled.div`
    position: relative;
    display: flex;
    flex-flow: row;
    width: 100%;
    height: 60px;
    background: ${props => props.theme.darkestbg};
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .8);
    justify-content: space-between;
    align-items: center;
`;



const NavBarA = () => {
    const state = useContext(StateContext);
    const { authChecked, uiConfig, userData } = state;
    // add an auth Error ?
    let avatarURL,
        verified;
    if (userData) {
        avatarURL = userData.avatar;
        verified = userData.verified;
    }

    return (
        <Container>
            <GuideButtonA />
            {!authChecked ?
                <ClipSpinnerA />
                :
                <>
                    {userData ?
                        <NavButtonContainerA
                            userData={userData}
                            avatarURL={avatarURL}
                            verified={verified}
                        />
                        :
                        <SignInContainerA
                            config={uiConfig}
                        />
                    }
                </>
            }
        </Container>
    );
};
export default NavBarA;