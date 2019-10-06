import React from 'react';
import styled from 'styled-components';

import ModalCloseHeaderA from '@A/01-headers/ModalCloseHeaderA';

const Container = styled.div`
    display: inline-flex;
    flex-flow: column;
    align-items: center;
    align-self: center;
    width: ${props => !props.carousel && '384px'};
    height: ${props => props.notification && '500px'};
    overflow: auto;
    flex-shrink: 1;
    radius: ${props => props.theme.brad};
    margin: 8px;
    background: ${props => props.theme.cardbg};
    box-shadow: ${props => props.theme.bshad};
`;

const ModalContainerA = props => {
  const { carousel, children, notification } = props;

  return (
    <Container carousel={carousel} notification={notification}>
      <ModalCloseHeaderA />
      {children}
    </Container>
  );
};

export default ModalContainerA;