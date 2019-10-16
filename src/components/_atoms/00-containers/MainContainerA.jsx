import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 3.750rem .313rem;
`;

const MainContainerA = props => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export default MainContainerA;
