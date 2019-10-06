import React, { useContext } from 'react';
import styled from 'styled-components';

import ModalCloseHeaderA from '@A/01-headers/ModalCloseHeaderA';

import { DispatchContext } from '../../../App';

const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 200;
  top: 0;
  left: 0;
`;

const BackdropContainerA = props => {
    const { children } = props;
    const dispatch = useContext(DispatchContext);

    return (
        <Backdrop onClick={e => e.target === e.currentTarget && dispatch({ type: 'modal' })}>
            {children}
        </Backdrop>
    );
};

export default BackdropContainerA;
