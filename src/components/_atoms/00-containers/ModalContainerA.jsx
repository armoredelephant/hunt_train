import React from 'react';
import styled from 'styled-components';

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

const hideOnClick = e => {
    const { handleModal } = props;
    (e.target === e.currentTarget) && handleModal();  
}

const ModalContainer = props => {
    const { children } = props;
    return (
        <Backdrop onClick={hideOnClick}>
            {children}
        </Backdrop>
    );
};

export default ModalContainer;
