import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const NavButton = styled.button`
    display: flex;
    flex-flow: row;
    font-family: ${props => props.theme.ff};
    letter-spacing: ${props => props.theme.ls};
    color: ${props => props.theme.blue};
    font-size: 13px;
    cursor: ${props => props.theme.btnCursor};
    outline: ${props => props.theme.btnOutline};
    background: ${props => props.theme.darkestbg};
    border: none;
    justify-content: space-evenly;
    align-items: center;
`;

const NavButtonA = props => {
    const { text, handleClick, history } = props;
    // refacotr and add a font-awesome icon inside
    return (
        <NavButton history={history} name={text} onClick={handleClick}>
            {props.children}
        </NavButton>
    )
};

export default withRouter(NavButtonA);