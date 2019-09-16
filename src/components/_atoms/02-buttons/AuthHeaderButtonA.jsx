import React, { useContext } from 'react';
import styled from 'styled-components';

import { DispatchContext } from '../../../App';

const Button = styled.button`
    background-color: ${props => props.theme.cardbg};
    color: ${props => props.isActive ? props.theme.blue : props.theme.fntClr};
    font-family: ${props => props.theme.ff};
    font-size: ${props => props.theme.btnFS};
    letter-spacing: ${props => props.theme.ls};
    width: 50%;
    padding: 15px 0;
    border: none;
    border-bottom: ${props => props.isActive && `1px solid ${props.theme.blue}`};
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