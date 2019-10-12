import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: row;
  align-content: flex-end;
  width: 12.5em;

  @media (max-width: 25.938em) {
    width: 6.25em;
  }
`;

const ZoneMarkContainerA = props => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export default ZoneMarkContainerA;
