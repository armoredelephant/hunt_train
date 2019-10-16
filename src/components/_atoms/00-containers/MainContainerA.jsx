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

  margin: 0 4%;
  
  @media (min-width: 64rem) {
    margin: 0 8%;
  }

  @media (min-width: 85.375rem) {
    margin: 0 12%;
  }

  @media (min-width: 120rem) {
    margin: 0 18%;
  }

  @media (min-width: 160rem) {
    margin: 0 26%;
  }
`;

const MainContainerA = props => {
  const { children } = props;
  return <Container className='container'>{children}</Container>;
};

export default MainContainerA;
