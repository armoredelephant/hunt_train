import React, { useContext, useEffect } from 'react';
import Axios from 'axios';
import styled from 'styled-components';

import { DispatchContext, StateContext } from '../../../App';

import SplashContainerA from '@A/00-containers/SplashContainerA';
import ContentContainerA from '@A/00-containers/ContentContainerA';

import SplashHeaderA from '@A/01-headers/SplashHeaderA';
import TextContainerA from '@A/00-containers/TextContainerA';
import ThemedButtonA from '@A/02-buttons/ThemedButtonA';
import JoinButtonM from '@M/03-buttons/JoinButtonM';

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
  let { allow, joinURL } = state;

  // Click handler, when clicked creates a new key in FB.
  const handleNew = () => {
    Axios.post(`http://hunt-conductor.com/api/scout/new`)
      .then(res => {
        let path = res.data.uniqueId;
        props.history.push(path);
        dispatch({ type: 'updateKey', cardKey: path });
      });
  };

  // useEffect that will check fb keys and allow if any key matches the joinURL
  useEffect(() => {
    const checkJoinURL = async url => {
      const options = {
        params: {
          joinURL: joinURL
        }
      };

      await Axios.get(url, options).then(res => {
        res.data.message && dispatch({ type: 'allow' });
      })
    }
    if (joinURL) dispatch({ type: 'error' });
    if (joinURL && joinURL.length === 20) {
      checkJoinURL(`http://hunt-conductor.com/api/scout/keys`);
    }
  }, [joinURL]);

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
          <JoinButtonM allow={allow} history={props.history} />
        </Container>
      </ContentContainerA>
    </SplashContainerA>
  );
};

export default SplashPageO;
