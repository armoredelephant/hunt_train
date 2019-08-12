import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  padding: ${props => props.theme.pad};
`;

const MainContainerA = props => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export default MainContainerA;
