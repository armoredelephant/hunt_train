import React, { useContext } from 'react';
import styled from 'styled-components';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { DispatchContext } from '../../../App';

library.add(faTimes);

const Button = styled.button`
    display: flex;
    align-self: flex-end;
    color: ${props => props.theme.fntClr};
    background: ${props => props.theme.cardbg};
    border: none;

    &:visited,
    &:focus,
    &:hover,
    &:active {
    text-decoration: none;
    outline: none;
    color: ${props => props.theme.red};
    }
`;

const Container = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    align-self: center;
    width: 384px;
    height: 500px;
    radius: ${props => props.theme.brad};
    margin: 8px;
    background: ${props => props.theme.cardbg};
    box-shadow: ${props => props.theme.bshad};
`;

const Notification = styled.div`
    display: flex;
    align-self: center;
    text-align: center;
    font-family: ${props => props.theme.ff};
    font-size: ${props => props.theme.fntSz};
    color: ${props => props.theme.green};
`;

const Header = styled.div`
    display: flex;
    justify-content: flex-end;
    align-self: flex-start;
    width: 100%;
`;


const LogoutNotificationA = () => {
    const dispatch = useContext(DispatchContext);
    const handleClick = () => {
        dispatch({ type: 'modal' });
    };

    return (
        <Container>
            <Header>
                <Button onClick={handleClick}>
                    <FontAwesomeIcon icon={faTimes} size='2x' />
                </Button>
            </Header>
            <Notification>
                User has been logged out.
            </Notification>
        </Container>
    );
};

export default LogoutNotificationA;