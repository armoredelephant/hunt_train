import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
import 'firebase/database';

import { DispatchContext, StateContext } from '../../../App';

import SplashContainerA from '@A/00-containers/SplashContainerA';
import ContentContainerA from '@A/00-containers/ContentContainerA';

import SplashHeaderA from '@A/01-headers/SplashHeaderA';
import TextContainerA from '@A/00-containers/TextContainerA';
import ButtonContainerA from '@A/00-containers/ButtonContainerA';
import ThemedButtonA from '@A/02-buttons/ThemedButtonA';
import JoinButtonM from '@M/03-buttons/JoinButtonM';

const paragraph = '';

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

  const fbDatabase = firebase.database();
  const cardsRef = fbDatabase.ref().child('cards')

  const handleNew = () => {
    const initialData = {
      scoutData: true
    };
    const newCardKey = cardsRef.push().key;
    const updates = {
      [`/${newCardKey}`]: initialData
    };

    return cardsRef.update(updates)
      .then(() => {
        let path = newCardKey;
        props.history.push(path);
        // dispatch({ type: 'updateKey', cardKey: newCardKey });
      });
  }

  useEffect(() => {
    cardsRef.once('value', snapshot => {
      if (joinURL) {
        dispatch({ type: 'error' });
      }
      if (snapshot.val()) {
        let keys = Object.keys(snapshot.val());
        keys.map(key => {
          key === joinURL && dispatch({ type: 'allow' });
        })
      }
    })
  }, [joinURL])

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
