import React, { useContext } from 'react';
import styled from 'styled-components';

import { DispatchContext } from '@O/00-pages/ScouterPageO';

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

const ModalContainer = props => {
  const { children } = props;
  const dispatch = useContext(DispatchContext);

  const hideOnClick = e => {
    if (e.target === e.currentTarget) dispatch({ type: 'modal' });
  };

  return <Backdrop onClick={hideOnClick}>{children}</Backdrop>;
};

export default ModalContainer;
