import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  color: ${props => props.theme.cardbg};
  font-family: ${props => props.theme.ff};
  letter-spacing: ${props => props.theme.ls};
  border: none;
  padding: 3px 16px;
  outline: none;
  font-size: ${props => props.theme.btnFS};
  border-radius: ${props => props.theme.brad};
  background-color: ${props => props.theme.blue};
  text-decoration: none;
  margin: 5px;

  &:visited,
  &:focus,
  &:hover,
  &:active {
    text-decoration: none;
    outline: none;
  }

  @media (max-width: 415px) {
    font-size: ${props => props.theme.mfs};
    padding: 1px 12px;
  }
`;

const StyledButton = props => {
  const { isDisabled, handleClick, text } = props;

  return (
    <Button disabled={isDisabled} onClick={handleClick}>
      {text}
    </Button>
  );
};

export default StyledButton;