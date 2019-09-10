import React, { useContext } from 'react';
import styled from 'styled-components';

import { StateContext } from '../../../App';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 100%;
`;

const Form = styled.form`
    display: flex;
    flex-flow: column;
    align-self: center;
    width: 100%;
    margin: 50px;
    justify-content: stretch;
`;

const Input = styled.input`
    display: flex
    flex: 2;
    border: none;
    background: ${props => props.theme.cardbg};
    color: ${props => props.theme.fntClr};
    font-family: ${props => props.theme.ff};
    line-spacing: ${props => props.theme.ls};
    font-size: 16px;

    &:visited,
    &:focus,
    &:hover,
    &:active {
        text-decoration: none;
        outline: none;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active  {
        font-family: ${props => props.theme.ff};
        line-spacing: ${props => props.theme.ls};
        -webkit-box-shadow: 0 0 0 30px ${props => props.theme.cardbg} inset !important;
        -webkit-text-fill-color: ${props => props.theme.fntClr} !important;
    }
`;

const InputContainer = styled.div`
    display: flex;
    flex-flow: row;
    align-content: center;
    border-bottom: 1px solid ${props => props.theme.darkestbg};
    padding-bottom: 8px;
    margin-bottom: 30px;
`;

const SubmitContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-self: center;
`;

const Submit = styled.input`
    display: flex
    flex: 2;
    border: none;
    padding: 4px 21px;
    background: ${props => props.theme.blue};
    color: ${props => props.theme.cardbg};
    font-family: ${props => props.theme.ff};
    line-spacing: ${props => props.theme.ls};
    border-bottom: 1px solid ${props => props.theme.blue};
    border-radius: ${props => props.theme.brad};
    font-size: ${props => props.theme.btnFS};
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    align-self: center;
    cursor: pointer;

    &:focus,
    &:active {
        transform: scale(1.1);
    }

    &:visited,
    &:focus,
    &:hover,
    &:active {
        text-decoration: none;
        outline: none;
    }
`;

// const SpanContainer = styled.div`
//     display: flex;
//     flex-flow: row;
//     justify-content: space-evenly;
//     align-content: center;
// `;

// const Span = styled.span`
//     color: ${props => props.theme.fntClr};
//     text-align: center;
//     flex: 1;
// `;

// const Hr = styled.hr`
//     border: 0;
//     height: 1px;
//     background: ${props => props.theme.darkestbg};
//     background-image: linear-gradient(to right, ${props => props.theme.cardbg}, ${props => props.theme.darkestbg}, ${props => props.theme.cardbg});
//     flex: 3;
// `;

const LogInBodyContainerA = () => {
    const state = useContext(StateContext);
    const { formCreate } = state;
    // keep me logged in ?

    // Google auth button ?

    const handleSubmit = e => {

    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <InputContainer>
                    <Input
                        type='email'
                        name='email'
                        placeholder='Email'
                    />
                </InputContainer>
                <InputContainer>
                    <Input
                        type='password'
                        name='password'
                        placeholder='Password'
                    />
                </InputContainer>
                {formCreate &&
                    <InputContainer>
                        <Input
                            type='password'
                            name='confirm'
                            placeholder='Confirm password'
                            required
                        />
                    </InputContainer>
                }
                <SubmitContainer>
                    <Submit type='submit' value={formCreate ? 'Create' : 'Log In'} />
                </SubmitContainer>
            </Form>
        </Container>
    );
};

export default LogInBodyContainerA;

