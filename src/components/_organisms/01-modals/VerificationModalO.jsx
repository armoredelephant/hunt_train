import React, { useContext } from 'react';
import styled from 'styled-components';

import ModalCloseHeaderA from '@A/01-headers/ModalCloseHeaderA';
import VerificationGuideA from '@A/08-guides/VerificationGuideA';
import VerificationFormM from '@M/00-forms/VerificationFormM';
import ChangeFormM from '@M/00-forms/ChangeFormM';

import { StateContext } from '../../../App';

const Container = styled.div`
    display: inline-flex;
    flex-flow: column;
    align-items: center;
    align-self: center;
    width: 384px;
    overflow: auto;
    flex-shrink: 1;
    radius: ${props => props.theme.brad};
    margin: 8px;
    background: ${props => props.theme.cardbg};
    box-shadow: ${props => props.theme.bshad};
`;

const VerificationModalO = () => {
    const state = useContext(StateContext);
    const { radioChecked } = state;
    return (
        <Container>
            <ModalCloseHeaderA />
            <VerificationGuideA />
            <VerificationFormM />
            {radioChecked &&
                <ChangeFormM />
            }
        </Container>
    );
};

export default VerificationModalO;