import React, { useContext } from 'react';
import styled from 'styled-components';

import { DispatchContext } from '../../../App';

// possibly refactor as re-usable from header
const Container = styled.div`
    position: relative;
    display: flex;
    flex-flow: row;
    width: 100%;
    height: 60px;
    font-family: ${props => props.theme.ff};
    font-size: 12px;
    background: ${props => props.theme.darkestbg};
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .8);
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
`;

const Button = styled.button`
    border: none;
    background: none;
    color: ${props => props.theme.footerclr};
    letter-spacing: ${props => props.theme.ls};
    font-family: ${props => props.theme.ff};
    font-size: 11px;
    display: flex;
    outline: none;
    padding: 0;
    border-bottom: 1px solid ${props => props.theme.footerclr};
    cursor: pointer;
`;

const Text = styled.div`
    margin-left: 10px;
    color: ${props => props.theme.footerclr};
    letter-spacing: ${props => props.theme.ls};
    font-size: 11px;
    display: flex
    align-self: center;
`;

const FooterA = () => {
    const dispatch = useContext(DispatchContext);

    const handleDispatch = () => {
        dispatch({ type: 'modalSwitch', modalType: 'footer' });
    }

    return (
        <Container>
            <Wrapper>
                <Button onClick={handleDispatch}>
                    Privacy Policy
                </Button>
                <Text>Created by Hattori Hanzo of Leviathan</Text>
            </Wrapper>
        </Container>
    );
};

export default FooterA;