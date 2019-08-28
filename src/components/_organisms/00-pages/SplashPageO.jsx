import React, { useContext, useEffect } from 'react';
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
        <ButtonContainerA column={true} >
          <ThemedButtonA // prettier-ignore
            handleClick={handleNew}
            text="Start Scouting"
          />
          <JoinButtonM allow={allow} history={props.history} />
        </ButtonContainerA>
      </ContentContainerA>
    </SplashContainerA>
  );
};

export default SplashPageO;
