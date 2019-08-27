import React from 'react';
import firebase from 'firebase';
import 'firebase/database';

import SplashContainerA from '@A/00-containers/SplashContainerA';
import ContentContainerA from '@A/00-containers/ContentContainerA';

import SplashHeaderA from '@A/01-headers/SplashHeaderA';
import TextContainerA from '@A/00-containers/TextContainerA';
import ThemedButtonA from '@A/02-buttons/ThemedButtonA';

const paragraph = '';

const SplashPageO = props => {
  const handleNew = () => {
    const initialData = {
      scoutData: true
    };

    const fbDatabase = firebase.database();
    const cardsRef = fbDatabase.ref().child('cards')
    const newCardKey = cardsRef.push().key;
    const updates = {
      [`/${newCardKey}`]: initialData
    };

    return cardsRef.update(updates)
      .then(() => {
        let path = newCardKey;
        props.history.push(path);
      });
  }

  return (
    <SplashContainerA className="darken">
      <ContentContainerA>
        <SplashHeaderA>Welcome to Hunt Conductor</SplashHeaderA>
        <TextContainerA text={paragraph} />
        <ThemedButtonA // prettier-ignore
          handleClick={handleNew}
          text="Start Scouting"
        />
      </ContentContainerA>
    </SplashContainerA>
  );
};

export default SplashPageO;
