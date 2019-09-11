import React, { useContext } from 'react';
import Axios from 'axios';
import styled from 'styled-components';

import { DispatchContext, StateContext } from '../../../App';

import SplashContainerA from '@A/00-containers/SplashContainerA';
import ContentContainerA from '@A/00-containers/ContentContainerA';

import SplashHeaderA from '@A/01-headers/SplashHeaderA';
import TextContainerA from '@A/00-containers/TextContainerA';
import ThemedButtonA from '@A/02-buttons/ThemedButtonA';

import ModalManagerM from '@M/04-utils/ModalManagerM';
import ModalContainerA from '@A/00-containers/ModalContainerA';

const paragraph = '';

const API_HOST_URL = process.env.API_URL;

const Container = styled.div`
    display: flex;
    flex-flow: column;
    border: 1px solid white;
    border-radius: ${props => props.theme.brad};
    margin-top: 5px;
    height: 200px;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.btnBG};
`;

const SplashPageO = props => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  const { showModal } = state;

  // Click handler, when clicked creates a new key in FB.
  const handleNew = () => {
    Axios.post(`${API_HOST_URL}/api/scout/new`)
      .then(res => {
        let path = res.data.uniqueId;
        props.history.push(path);
        dispatch({ type: 'updateKey', cardKey: path });
      });
  };

  const handleModal = () => {
    dispatch({ type: 'auth' });
  }

  return (
    <SplashContainerA className="darken">
      <ContentContainerA>
        <SplashHeaderA>Welcome to Hunt Conductor</SplashHeaderA>
        <TextContainerA text={paragraph} />
        <Container>
          <ThemedButtonA // prettier-ignore
            handleClick={handleNew}
            inverted={true}
            text="Start Scouting"
          />
          <ThemedButtonA
            handleClick={handleModal}
            inverted={true}
            text="Sign In"
          />
        </Container>
        {showModal && (
          <ModalContainerA>
            <ModalManagerM history={props.history} />
          </ModalContainerA>
        )}
      </ContentContainerA>
    </SplashContainerA>
  );
};

export default SplashPageO;
