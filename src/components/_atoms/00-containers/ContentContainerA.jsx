import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  height: 18.750em;
  margin: .938em;
`;

const ContentContainerA = props => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export default ContentContainerA;
