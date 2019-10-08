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

    @media only screen 
    and (min-device-width : 375px) 
    and (max-device-width : 667px) 
    and (orientation : portrait) { 
      max-height: 600px;
      overflow: auto;
    }

    @media only screen 
    and (min-device-width : 414px) 
    and (max-device-width : 736px) 
    and (orientation : portrait) {
      max-height: 680px;
      overflow: auto;
    }

    @media only screen 
    and (min-device-width : 320px) 
    and (max-device-width : 568px) 
    and (orientation : portrait) {
      max-height: 500px;
      overflow: auto;
    }
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