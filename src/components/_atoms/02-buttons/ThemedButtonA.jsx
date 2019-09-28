import React from 'react';
import { withRouter } from 'react-router-dom'; // was { Link }
import styled from 'styled-components';

const Button = styled.button`
  display: ${props => props.theme.btnDisplay};
  background-color: ${props => props.inverted ? props.theme.darkBG : props.theme.btnBG};
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
  order: ${props => props.order};
  margin: 5px;

  @media (max-width: 415px) {
    font-size: ${props => props.theme.mfs};
    padding: 9px 22px;
  }
`;

const ThemedButtonA = props => {
  const { text, inverted, isDisabled, handleClick } = props;
  return <Button inverted={inverted} disabled={isDisabled} onClick={handleClick}>{text}</Button>;
};

export default withRouter(ThemedButtonA);
