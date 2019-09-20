import React from 'react';
import styled from 'styled-components';

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

const InputFieldA = props => {
    const { inputN, inputT, inputPlaceHolder, require } = props;
    return (
        <InputContainer>
            <Input
                type={inputT}
                name={inputN}
                placeholder={inputPlaceHolder}
                required={require}
            />
        </InputContainer>
    );
};

export default InputFieldA;