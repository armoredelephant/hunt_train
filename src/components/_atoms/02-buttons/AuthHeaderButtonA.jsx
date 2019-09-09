import React, { useContext } from 'react';
import styled from 'styled-components';

import { DispatchContext } from '../../../App';

// change to active one having the brighter background and it being like a button

const Button = styled.button`
    background-color: ${props => props.isActive ? '#FFFFFF' : '#C6C6C6'};
    width: 50%;
    padding-top: 15px;
    text-align: left;
    border: none;
    border-right: ${props => props.value === 'Log In' && props.theme.authBorder}
    outline: none;

    &:visited,
    &:focus,
    &:hover,
    &:active {
        text-decoration: none;
        outline: none;
    }
`;

const AuthHeaderButtonA = props => {
    const { isActive, text } = props;
    const dispatch = useContext(DispatchContext);

    const handleSwitch = e => {
        e.preventDefault();
        const target = e.target;
        const value = target.value;
        const s = value.toLowerCase();
        dispatch({ type: `${s}` });
    };

    return (
        <Button onClick={handleSwitch} isActive={isActive} value={text}>{text}</Button>
    );
};

export default AuthHeaderButtonA;