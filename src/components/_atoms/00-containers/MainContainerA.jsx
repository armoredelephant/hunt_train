import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  width: 100%;
  display: inline-flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 3.750rem .313rem;
  flex-shrink: 0;
`;

const MainContainerA = props => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export default MainContainerA;
