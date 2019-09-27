import React, { useContext } from 'react';
import Axios from 'axios';
import styled from 'styled-components';

import { DispatchContext, StateContext } from '../../../App';

import SplashContainerA from '@A/00-containers/SplashContainerA';
import ContentContainerA from '@A/00-containers/ContentContainerA';
import SignInContainerA from '@A/00-containers/SignInContainerA';

import SplashHeaderA from '@A/01-headers/SplashHeaderA';
import TextContainerA from '@A/00-containers/TextContainerA';
import ThemedButtonA from '@A/02-buttons/ThemedButtonA';
import ClipSpinnerA from '@A/06-spinners/ClipSpinnerA';

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
  const { isLoading, showModal, userData } = state;

  // Click handler, when clicked creates a new key in FB.
  const handleNew = () => {
    Axios.post(`${API_HOST_URL}/api/scout/new`)
      .then(res => {
        let path = res.data.uniqueId;
        props.history.push(path);
        dispatch({ type: 'updateKey', cardKey: path });
      });
  };

  return (
    <SplashContainerA className="darken">
      <ContentContainerA>
        <SplashHeaderA>Welcome to Hunt Conductor</SplashHeaderA>
        <TextContainerA text={paragraph} />
        {isLoading ?
          <ClipSpinnerA />
          :
          <ThemedButtonA // prettier-ignore
            handleClick={handleNew}
            inverted={false}
            text="Start Scouting"
          />
        }
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
