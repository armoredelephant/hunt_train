import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(/resources/images/hunt.jpg);
`;

const MainContainerA = props => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export default MainContainerA;
