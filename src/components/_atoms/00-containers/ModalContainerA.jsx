import React from 'react';
import styled from 'styled-components';

import ModalCloseHeaderA from '@A/01-headers/ModalCloseHeaderA';

const Container = styled.div`
    display: inline-flex;
    flex-flow: column;
    align-items: center;
    align-self: center;
    width: ${props => !props.carousel && '24em'};
    height: ${props => props.notification && '31.250em'};
    overflow: auto;
    flex-shrink: 1;
    radius: ${props => props.theme.brad};
    margin: .5em;
    background: ${props => props.theme.cardbg};
    box-shadow: ${props => props.theme.bshad};

    @media only screen 
    and (min-device-width : 23.439em) 
    and (max-device-width : 41.688em) 
    and (orientation : portrait) { 
      max-height: 37.5em;
      overflow: auto;
    }

    @media only screen 
    and (min-device-width : 25.875em) 
    and (max-device-width : 46em) 
    and (orientation : portrait) {
      max-height: 42.5em;
      overflow: auto;
    }

    @media only screen 
    and (min-device-width : 20em) 
    and (max-device-width : 35.5em) 
    and (orientation : portrait) {
      max-height: 31.25em;
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