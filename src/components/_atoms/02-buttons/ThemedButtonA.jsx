import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled(Link)`
  display: ${props => props.theme.btnDisplay};
  background-color: ${props => props.theme.btnBG};
  width: ${props => props.theme.btnW};
  height: ${props => props.theme.btnH};
  padding: ${props => props.theme.btnP};
  font-size: ${props => props.theme.btnFS};
  text-transform: ${props => props.theme.btnTT};
  letter-spacing: ${props => props.theme.btnLS};
  color: ${props => props.theme.btnColor};
  border: 2px solid ${props => props.theme.btnColor};
  border-radius: ${props => props.theme.btnBorderRadius};
  text-align: ${props => props.theme.btnTA};
  text-decoration: ${props => props.theme.btnTD};
  cursor: ${props => props.theme.btnCursor};
  outline: ${props => props.theme.btnOutline};
  line-height: ${props => props.theme.btnLH};
  position: ${props => props.theme.btnPos};
  font-family: ${props => props.theme.ff};
  align-self: center;
  order: 1;
`;

const ThemedButtonA = props => {
  const { text, destination, handleClick } = props;
  return <Button to={destination}>{text}</Button>;
};

export default ThemedButtonA;
