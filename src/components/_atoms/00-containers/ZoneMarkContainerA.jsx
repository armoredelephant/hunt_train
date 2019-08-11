import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: row;
  align-content: flex-end;
  width: 200px;

  @media (max-width: 415px) {
    width: 100px;
  }
`;

const ZoneMarkContainerA = props => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export default ZoneMarkContainerA;
